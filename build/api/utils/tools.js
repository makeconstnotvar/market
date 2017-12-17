var ObjectId = require('mongodb').ObjectID,
    bll = require('../business'),
    fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    waterfall = require('async/waterfall'),
    config = require('../../config');


var tools = {
    deleteFileSync(path) {
        var exist = fs.existsSync(path);
        if (exist)
            fs.unlinkSync(path);
    },
    getPages (count) {
        var pages = [];
        for (var i = 1; i <= Math.ceil(count / config.settings.pageSize); i++) {
            pages.push(i)
        }
        return pages;
    },
    getParamValue (parameters, ymlName) {
        var selectedParameter, selectedValue;

        selectedParameter = parameters.find(param => param.ymlName == ymlName);

        if (selectedParameter && selectedParameter.values) {
            selectedValue = selectedParameter.values.find(val => val.id == selectedParameter.selected);
        }

        if (selectedValue && selectedValue.value)
            return selectedValue.value;

        return '';

    },
    getCatId (product) {
        if (product.category) {
            switch (product.category.url) {
                case "backpacks":
                    return '2000';
                case 'handbags':
                    return '1000';
            }
        }
    },
    generateUrls () {
        return new Promise((resolve, reject)=> {
            var urls = require(path.join(config.path.public, config.settings.renderListFileName));
            waterfall([
                addProductUrls,
                getCategoriesUrls
            ], processResult);
            function addProductUrls(callback) {
                //странная херня - business пустой, если require в начале
                bll.product.selectAll({
                    query: {publish: true},
                    take: 0
                }).populate('category').exec(function (err, products) {

                    if (products && products.length)
                        products.forEach(function (product) {
                            if (product.category && product.category.url && product.url)
                                urls.push('/' + product.category.url + '/' + product.url);
                        });
                    callback(err, products);
                });
            }

            function getCategoriesUrls(products, callback) {
                bll.category.selectAll({take: 0}).exec(function (err, categories) {

                    if (categories && categories.length)
                        categories.forEach(function (cat) {
                            if (cat.url) {
                                urls.push('/' + cat.url);
                                urls.push('/' + cat.url + '/');
                            }
                            var productByCat = products.filter(product=> {
                                if (!(product.category && product.category.url))
                                    return false;
                                return product.category.url == cat.url;
                            });
                            var pages = tools.getPages(productByCat.length);
                            if (pages.length > 1) {
                                pages.forEach(function (page) {
                                    var myPath = '/' + cat.url + '/page/' + page;
                                    urls.push(myPath);
                                })
                            }
                        });
                    callback(err);
                });
            }

            function processResult(err) {
                if (err) reject(err);
                resolve(urls);
            }
        });

    },
    generateSrvUrls () {
        var that = this;
        return new Promise(function (resolve, reject) {
            var urls = require(path.join(config.path.public, config.settings.renderListFileName));
            waterfall([
                addProductUrls,
                getCategoriesUrls
            ], processResult);

            function addProductUrls(callback) {
                bll.product.selectAll({
                    query: {publish: true},
                    take: 0
                }).exec((err, products) => {
                    callback(err, products);
                });
            }

            function getCategoriesUrls(products, callback) {
                bll.category.getTree().exec((err, categories)=> {
                    if (categories && categories.length)
                        categories.forEach(function (cat) {
                            urls.push('/' + cat.url);
                            urls.push('/' + cat.url + '/');
                            var productByCat = products.filter(product=> {
                                return product.categories[0].url == cat.url;
                            });
                            var pages = that.getPages(productByCat.length);
                            if (pages.length > 1) {
                                pages.forEach(function (page) {
                                    var myPath = '/' + cat.url + '/page/' + page;
                                    urls.push(myPath);
                                })
                            }
                        });
                    callback(err);
                });
            }

            function processResult(err) {
                if (err) reject(err);
                resolve(urls);
            }
        })
    },
    sortPhotos (photos) {
        return photos.sort(item=> {
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

    },

    getTypeByExt(ext) {

        var ext = ext.toLowerCase();
        switch (ext) {
            case '.doc':
            case '.docx':
                return 'fa-file-word-o';
            case '.pdf':
                return 'fa-file-pdf-o';
            case '.xls':
            case '.xlsx':
                return 'fa-file-excel-o';
            case '.txt':
                return 'fa-file-text-o';
            case '.mp4':
            case '.m4v':
            case '.mid':
            case '.mkv':
            case '.webm':
            case '.mov':
            case '.avi':
            case '.wmv':
            case '.mpg':
                return 'fa-file-video-o';
            case '.jpg':
            case '.jpeg':
            case '.png':
            case '.gif':
            case '.webp':
            case '.cr2':
            case '.tif':
            case '.bmp':
            case '.jxr':
            case '.psd':
                return 'fa-file-image-o';
            case '.zip':
            case '.tar':
            case '.rar':
            case '.gz':
            case '.bz2':
            case '.7z':
                return 'fa-file-archive-o';
            case '.mp3':
            case '.m4a':
            case '.ogg':
            case '.flac':
            case '.wav':
                return 'fa-file-audio-o';
            default:
                return 'fa-file-o'
        }
    }
};
module.exports = tools;