'use strict';

var bll = require('../business'),
    Base = require('./base'),
    config = require('../../config'),
    utils = require('../utils'),
    waterfall = require("async/waterfall"),
    series = require("async/series"),
    _ = require('underscore');

module.exports = class extends Base {

    constructor() {
        super('product')
    }

    // серверные методы
    select(req, res, next) {
        var options = req.body;
        this.entity.select(options).populate('category').populate('parameters.parameter').populate('template').exec((err, product) => {
            if (err)return next(err);
            res.send(product);
        });
    }

    selectAll(req, res, next) {
        var options = req.body;
        this.entity.selectAll(options).populate('category').exec((err, products) => {
            if (err)return next(err);
            res.send(products);
        });
    }

    update(req, res, next) {
        var item = req.body;
        if (item.publish && (!item.name || !item.url)) {
            var err = new Error('Ошибка заполнения полей продукта');
            var errName = 'Поле "название" не должно быть пустым ';
            var errUrl = 'Поле "url" не должно быть пустым';
            if (item.name)
                err.userMessage += errName;
            if (item.url)
                err.userMessage += errUrl;
            return next(err);
        }
        this.entity.update(item).exec((err, product) => {
            if (err) {
                if (err.code == 11000)
                    err.userMessage = `Url ${item.url} уже существует в базе данных у друго товара`;
                return next(err);
            }
            res.send('ok');
        });
    }

    category(req, res, next) {
        //при обновлении категории должен быть продукт и у него указана категория в виде объекта
        var product = req.body,
            that = this;

        if (product.category && product.category.template) {
            product.template = product.category.template;
            bll.template.selectById(product.category.template).populate('parameters').lean().exec((err, template) => {
                if (err) return next(err);
                if (template) {
                    that.entity.changeParameters(product, template.parameters).exec((err, product) => {
                        if (err)return next(err);
                        res.send('ok');
                    });
                }
            });
        }
    }

    copy(req, res, next) {
        var newProduct = req.body,
            oldFolder = newProduct._id;
        delete newProduct._id;

        bll.product.insert(newProduct, (err, entity) => {
            if (err) return next(err);
            bll.file.copy({
                newFolder: entity._id.toString(),
                oldFolder: oldFolder,
                files: true,
                photos: true
            })
                .then(() => res.send(entity._id))
                .catch(err => next(err))


        })
    }

    // клиентские методы
    list(req, res, next) {
        let that = this,
            filter = req.body.filter,
            categoryId = filter.categoryId,
            order = filter.order,
            parameters = filter.parameters,
            take = config.settings.pageSize,
            page = filter.page || 1,
            skip = (page - 1) * take,
            and = [{publish: true}, {category: categoryId}],
            query;

        let or = utils.query.getParametersQuery(parameters);
        if (or)
            and = and.concat(or);

        query = {$and: and};

        series({
            products: getProducts,
            count: getProductsCount,
            contract: getContract
        }, processList);


        function getProducts(callback) {
            that.entity.selectAll({
                query: query,
                take: take,
                skip: skip,
                order: order,
                projection: {
                    'name': 1,
                    'url': 1,
                    'details': 1,
                    'article': 1,
                    'price': 1,
                    'count': 1,
                    'photos': 1,
                    'stock': 1,
                    'stockText': 1
                }
            }).lean().exec((err, products) => {
                if (err)
                    callback(err);
                else
                    callback(null, products);
            });
        }

        function getProductsCount(callback) {
            that.entity.count(query).exec((err, count) => {
                if (err) callback(err);
                else
                    callback(null, count);
            })
        }

        function getContract(callback) {
            bll.contract.select({query: {uid: req.uid, status: 'temp'}}).lean().exec((err, contract) => {
                if (err) callback(err);
                else
                    callback(null, contract);
            });
        }

        function getParameters(catId) {
            return new Promise((resolve, reject) => {
                bll.category.select({query: {_id: catId}}).deepPopulate('template.parameters.parameter').lean().exec((err, category) => {
                    if (err) reject(err);
                    resolve(category.template.parameters.map(p => p.parameter))
                })
            })
        }

        function filterParameters(parameters, filterParameters) {
            let result = [];
            filterParameters.forEach(fParam => {
                let foundedParameters = parameters.filter(p => p.url === fParam.url);
                if (foundedParameters) {
                    foundedParameters.forEach(foundedParameter => {
                        let valResult = [];
                        foundedParameter.values.forEach(v => {
                            fParam.values.forEach(fpv => {
                                if (fpv === v.url)
                                    valResult.push(v)
                            });
                        });
                        foundedParameter.values = valResult;
                    })
                }
                result = result.concat(foundedParameters);
            });
            return result;
        }

        function processList(err, results) {
            if (err) return next(err);
            res.send({
                products: getListFields(results.products, results.contract),
                count: results.count
            });
        }

        function getVarNameFromObject (nameObject) {
            for(let varName in nameObject) {
                return varName;
            }
        }

        function castToArray(obj) {
            return Object.keys(obj).map(key => {
                let o = {};
                o[key] = obj[key];
                return o;
            })
        }
    }

    view(req, res, next) {
        var that = this,
            url = req.body.id,
            uid = req.uid;

        series({
            product: getProduct,
            contract: getContract
        }, processView);

        function getProduct(callback) {
            that.entity.select({
                query: {url: url, publish: true},
                projection: {
                    'name': 1,
                    'code': 1,
                    'details': 1,
                    'article': 1,
                    'title': 1,
                    'description': 1,
                    'information': 1,
                    'keywords': 1,
                    'parameters': 1,
                    'count': 1,
                    'price': 1,
                    'photos': 1
                }
            }).populate('parameters.parameter').lean().exec((err, product) => {
                if (err)
                    callback(err);
                if (!product) {
                    res.status(404);
                    return next();
                }
                else callback(null, product)

            })
        }

        function getContract(callback) {
            bll.contract.select({query: {uid: uid, status: 'temp'}}).lean().exec((err, contract) => {
                if (err) callback(err);
                else callback(null, contract)
            })
        }

        function processView(err, results) {
            if (err)return next(err);
            res.send(getViewFields(results.product, results.contract));
        }
    }

    special(req, res, next) {
        var that = this;

        series({
            products: getProducts,
            contract: getContract
        }, processSpecial);

        function getProducts(callback) {
            that.entity.selectAll({
                query: {special: true, publish: true},
                take: 9,
                projection: {
                    'name': 1,
                    'price': 1,
                    'count': 1,
                    'url': 1,
                    'category': 1,
                    'photos': {$elemMatch: {fileType: 'cover'}},
                    'photos.fileId': 1
                }
            }).populate('category').lean().exec((err, products) => {
                if (err) callback(err);
                else callback(null, products);

            });
        }

        function getContract(callback) {
            bll.contract.select({
                query: {uid: req.uid, status: 'temp'}
            }).populate('positions.product').lean().exec((err, contract) => {
                if (err) callback(err);
                else callback(null, contract);
            });
        }

        function processSpecial(err, results) {
            //todo подгрузить сео
            if (err)return next(err);
            res.send(getSpecialFields(results.products, results.contract));
        }
    }
};


function getSpecialFields(products, contract) {
    if (products)
        for (var i = 0; i < products.length; i++) {
            products[i].available = products[i].count > 0;
            delete products[i].count;

            if (products[i].category) {
                products[i].caturl = products[i].category.url;
                delete products[i].category;
            }

            if (products[i].photos) {
                products[i].cover = products[i].photos[0].fileId;
                delete products[i].photos;
            }
            if (contract && contract.positions) {
                var inCart = _.find(contract.positions, function (position) {
                    if (position.product)
                        return products[i]._id.equals(position.product._id)
                });
                if (inCart) {
                    products[i].inCart = true;
                }
            }
        }
    return products;
}

function getViewFields(product, contract) {
    product.available = product.count > 0;
    delete product.count;

    var images = _.filter(product.photos, function (photo) {
        return photo.fileType == 'image'
    });

    if (images) {
        images = sortPhotos(images);
        product.images = _.pluck(images, 'fileId');
    }

    delete product.photos;

    if (product.information && product.information.length < 200) {
        delete product.information;
    }


    if (contract && contract.positions) {

        var inCart = _.find(contract.positions, function (position) {
            if (position.product)
                return product._id.equals(position.product)
        });

        if (inCart) {
            product.inCart = true;
        }
    }
    if (product.parameters) {
        var combinedParameters = [];
        for (var i = 0; i < product.parameters.length; i++) {
            if (product.parameters[i].parameter && !product.parameters[i].parameter.field) {
                var parameter = {
                    name: product.parameters[i].parameter.name,
                    unit: product.parameters[i].parameter.unit,
                    value: getValue(product.parameters[i])
                };
                combinedParameters.push(parameter);
            }
        }
        product.parameters = combinedParameters;
    }

    return product;
}

function getListFields(products, contract) {
    for (var i = 0; i < products.length; i++) {
        products[i].available = products[i].count > 0;
        delete products[i].count;

        var cover = _.find(products[i].photos, function (photo) {
            return photo.fileType == 'cover'
        });
        if (cover)
            products[i].cover = cover.fileId;

        var list = _.filter(products[i].photos, function (photo) {
            return photo.fileType == 'list'
        });
        if (list)
            products[i].list = _.pluck(list, 'fileId');

        delete products[i].photos;
    }

    if (contract && contract.positions) {
        for (var i = 0; i < products.length; i++) {
            var inCart = _.find(contract.positions, function (pos) {
                return products[i]._id.equals(pos.product)
            });
            if (inCart) {
                products[i].inCart = true;
            }
        }
    }
    return products;
}

function getValue(paramContainer) {
    var foundValue = '';
    var exist = _.find(paramContainer.parameter.values, val => {
        return val._id.equals(paramContainer.selected)
    });
    if (exist)
        foundValue = exist.value;

    return foundValue;
}

function sortPhotos(photos) {
    return _.sortBy(photos, function (item) {
        var rank = {
            "cover": 10,
            "list": 20,
            "image": 30
        };
        if (item.type == 'image') {
            item.order = item.order || 1;
            return rank[item.type] + item.order;
        }
        else {
            return rank[item.type];
        }
    })

}