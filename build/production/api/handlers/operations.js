'use strict';

const sm = require('sitemap'),
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
        let options = {
            hostname: config.system.host,
            cacheTime: 600000
        };

        let urls = config.settings.sitemapUrls.map(url => {
            return {url: url, changefreq: 'monthly', priority: url == '/' ? 1.0 : 0.9, lastmod: new Date()}
        });

        bll.product.selectAll({take: 0}).populate('category').exec(function (err, products) {
            if (err) return next(err);
            products.forEach(product => {
                if (product.category && product.category.url && product.url) {
                    let url = {
                        url: '/' + product.category.url + '/' + product.url,
                        changefreq: 'monthly',
                        priority: 0.8
                    };
                    url.lastmod = product.modifyDate ? product.modifyDate : new Date();
                    urls.push(url);
                }
            });
            options.urls = urls;
            let sitemap = sm.createSitemap(options);
            let xml = sitemap.toXML();
            fs.writeFile(path.join(config.path.files, config.settings.sitemapFileName), xml, function (err) {
                if (err) console.log(err);
                res.send('ok');
            });
        });
    }

    yml(req, res, next) {
        var options = req.body;
        operations.getYmlText(options).then(function (yml) {
            fs.writeFile(path.join(config.path.files, 'yml.xml'), yml, function (err) {
                if (err) return next(err);
                res.send(yml);
            });
        });

    }

    resizeAll(req, res, next) {
        var resizeFunctions = [];
        bll.product.selectAll({take: 0, projection: {'_id': 1, 'photos': 1}}).exec((err, products) => {
            products.forEach(product => {
                var folder = path.join(config.path.photo, product._id.toString());

                product.photos.forEach(photo => {
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
            waterfall(resizeFunctions, (err, result) => {
                if (err) return next(err);
                res.send(result)
            })
        })
    }
};