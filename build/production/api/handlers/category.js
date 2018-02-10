'use strict';

var bll = require('../business'),
    Base = require('./base'),
    unsortedName = 'не определена';
//ObjectId = require('mongodb').ObjectID,

module.exports = class extends Base {
    constructor() {
        super('category')
    }

    selectById(req, res, next) {
        var options = req.body;
        this.entity.selectById(options.id).populate('parent').populate('template').exec((err, product) => {
            if (err) return next(err);
            res.send(product);
        });
    }

    selectAll(req, res, next) {
        var options = req.body;
        this.entity.selectAll(options).exec((err, categories) => {
            if (err) return next(err);
            var cats = createTree(categories);
            res.send(cats);
        });
    }

    changeTemplate(req, res, next) {
        //нужно проапдейтить продукты этой категории
        var item = req.body;
        var promises = [];
        bll.template.selectById(item.template).populate('parameters').lean().exec((err, template) => {
            if (err) return next(err);
            bll.product.selectAll({query: {category: item._id}}).populate('parameters.parameter').lean().exec((err, products) => {
                if (err) return next(err);
                if (products)
                    products.forEach(product => {
                        var promise = bll.product.changeParameters(product, template.parameters).exec((err, product) => {
                            if (err) return next(err);
                            promise.resolve();
                        });
                        promises.push(promise);
                    });

                Promise.all(promises).then(() => {
                    bll.category.update(item).exec((err, category) => {
                        if (err) return next(err);
                        res.send('ok');
                    });
                });


            });


        });


    }

    list(req, res, next) {
        var options = req.body;
        /*options.projection = {
            'name': 1,
            'details': 1,
            'url': 1,
            'urlText': 1,
            'photos': {$elemMatch: {fileType: 'image'}},
            'photos.fileId': 1
        };*/
        bll.category.selectAll(options).lean().exec((err, categories) => {
            if (err) return next(err);
            let cats = createTree(categories);
            res.send(getSpecialFields(cats));
        });
    }
};

function createTree(datas) {
    //видимо существует лучший способ построить дерево, но я его не нашел
    var parents = [],
        childs = [],
        containsUnsort = false,
        unsort = {

            //_id: ObjectId(),
            name: unsortedName,
            children: [],
            level: 0
        };

    for (var i = 0; i < datas.length; ++i) {
        var data = datas[i];
        if (!data.parent) {
            parents.push(data);

        }
        else {
            var parent;

            parent = findParent(parents, data);
            if (parent) {
                parent._doc.children = parent._doc.children || [];
                parent._doc.children.push(data);

            }
            else {
                parent = findParent(datas, data);
                if (parent) {
                    parent._doc.children = parent._doc.children || [];
                    parent._doc.children.push(data);

                }
                else {
                    unsort.children.push(data);
                    if (!containsUnsort) {
                        parents.push(unsort);
                        containsUnsort = true;
                    }

                }
            }


        }
    }


    return parents;


}

function findParent(items, child) {
    for (let i = 0; i < items.length; i++) {
        if (items[i]._id.equals(child.parent))
            return items[i];
        else {
            if (items[i].children) {
                let parent = findParent(items[i].children, child);
                if (parent)
                    return parent;
            }
        }
    }
}

function sortByAsc(a, b) {
    if (a.order > b.order) {
        return 1;
    }
    if (a.order < b.order) {
        return -1;
    }
    return 0;
}

function getSpecialFields(categories) {
    return categories.map(category => {
        if (category.photos && category.photos.length) {
            category.cover = category.photos.find(p => p.fileType === 'cover');
            category.jumbos = category.photos.filter(p => p.fileType === 'jumbo');
            delete category.photos;
        }
        return category;
    });
}