'use strict';

var sm = require('sitemap'),

    fs = require('fs'),
    path = require('path'),
    waterfall = require('async/waterfall'),
    resizer = require('../utils').resizer,
    bll = require('../business'),
    config = require('../../config'),
    utils = require('../utils'),
    tools = utils.tools,
    operations = utils.operations;


module.exports = class {
    sitemap(req, res, next) {
        var options = {
            hostname: config.system.host,
            cacheTime: 600000
        };
        var renderListUrls = require(path.join(config.path.public, config.settings.renderListFileName));

        var urls = renderListUrls.map(url=> {
            return {url: url, changefreq: 'monthly', priority: url == '/' ? 1.0 : 0.9, lastmod: new Date()}
        });
        waterfall([
                productsUrls,
                categoriesUrls
            ],
            processResult);

        function productsUrls(callback) {
            bll.product.selectAll({take: 0}).populate('category').exec(function (err, products) {
                if (err) return next(err);
                products.forEach(product=> {
                    if (product.category && product.category.url && product.url) {
                        var url = {
                            url: '/' + product.category.url + '/' + product.url,
                            changefreq: 'monthly',
                            priority: 0.8
                        };
                        url.lastmod = product.modifyDate ? product.modifyDate : new Date();
                        urls.push(url);
                    }
                });
                callback(err, products)
            });
        }

        function categoriesUrls(products, callback) {
            bll.category.selectAll().exec((err, categories)=> {
                if (err) return next(err);
                categories.forEach(cat=> {
                    urls.push({
                        url: '/' + cat.url + '/',
                        changefreq: 'monthly',
                        priority: 0.8,
                        lastmod: new Date()
                    });
                    var productByCat = products.filter(product => {
                        if (!(product.category && product.category.url))
                            return false;
                        return product.category.url == cat.url;
                    });
                    var pages = tools.getPages(productByCat.length);
                    if (pages.length > 1) {
                        pages.forEach(function (page) {
                            urls.push({
                                url: '/' + cat.url + '/page/' + page,
                                changefreq: 'monthly',
                                priority: 0.8,
                                lastmod: new Date()
                            });
                        })
                    }
                });
                callback(null, {});
            });
        }

        function processResult(err, result) {
            options.urls = urls;
            var sitemap = sm.createSitemap(options);
            var xml = sitemap.toXML();
            fs.writeFile(path.join(config.path.public, config.settings.sitemapFileName), xml, function (err) {
                if (err) console.log(err);
                res.send({xml: xml});
            });
        }
    }

    prerender(req, res, next) {
        tools.generateUrls().then(function (urls) {
            operations.prerenderAll(urls).then(function () {
                res.send('ok');
            })
        }, function (err) {
            if (err) return next(err);
        });
    }

    prerenderSrv(req, res, next) {
        tools.generateSrvUrls().then(function (urls) {
            operations.prerenderAll(urls).then(function () {
                res.send(200);
            })
        }, function (err) {
            if (err) return next(err);
        });
    }

    yml(req, res, next) {
        var options = req.body;
        operations.getYmlText(options).then(function (yml) {
            fs.writeFile(path.join(config.path.public, 'yml.xml'), yml, function (err) {
                if (err) return next(err);
                res.send(yml);
            });
        });

    }

    log(info, cb, next) {
        cb(function (socket) {
            socket.send('connected!');
        });
    }

    resizeAll(req, res, next) {
        var resizeFunctions = [];
        bll.product.selectAll({take: 0, projection: {'_id': 1, 'photos': 1}}).exec((err, products)=> {
            products.forEach(product=> {
                var folder = path.join(config.path.photo, product._id.toString());

                product.photos.forEach(photo=> {
                    var resizeFunction = function (callback) {
                        var file = path.join(folder, photo.fileId),
                            stream = fs.createReadStream(file);
                        tools.deleteFileSync(path.join(folder, 'l_' + photo.fileId));
                        tools.deleteFileSync(path.join(folder, 'srv_' + photo.fileId));
                        tools.deleteFileSync(path.join(folder, 'm_' + photo.fileId));
                        tools.deleteFileSync(path.join(folder, 's_' + photo.fileId));
                        resizer(photo.fileType, stream, folder, photo.fileId)
                            .then(result => callback())
                            .catch(err => callback(err));
                    };
                    resizeFunctions.push(resizeFunction);
                });
            });
            waterfall(resizeFunctions, (err, result)=> {
                if (err) return next(err);
                res.send(result)
            })
        })
    }

    makeUrls(req, res, next) {
        var urls = require(path.join(config.path.public, config.settings.urlsFileNameSource)) || [];

        bll.category.selectAll({take: 0}).lean().exec((err, categories) => {
            if (err) return next(err);
            if (categories)
                categories.forEach(category=> {
                    if (category.url)
                        urls = urls.concat([
                            `/${category.url}`,
                            `/${category.url}/`,
                            `/${category.url}/*`

                        ])
                });
            var text = JSON.stringify(urls, null, '\t');
            fs.writeFileSync(path.join(config.path.public, config.settings.urlsFileName), text);
            res.send(text);
        })
    }



    test(ws, req){
        ws.on('message', function(msg) {
            console.log(msg);
        });
        console.log('socket', req.testing);
    }
};