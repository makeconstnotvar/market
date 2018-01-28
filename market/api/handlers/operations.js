
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

        let staticUrls = config.settings.sitemapUrls.map(url => {
            return {url: url, changefreq: 'monthly', priority: url == '/' ? 1.0 : 0.7, lastmod: new Date()}
        });

        bll.product.selectAll({take: 0}).populate('category').populate('parameters.parameter').exec(function (err, products) {
            if (err) return next(err);
            let categoriesSet = new Set();
            let productUrls = [];
            products.forEach(product => {
                if (product.category && product.category.url && product.url) {
                    let brand = product.parameters.filter(p => p.parameter.url == 'brand').map(p => {
                        let selectedValue = p.parameter.values.find(v => v._id.equals(p.selected));
                        return selectedValue ? selectedValue.url : undefined;
                    }).join('');
                    if (brand)
                        categoriesSet.add(`/catalog/${product.category.url}?brand=${brand}`);
                    let url = {
                        url: '/' + product.category.url + '/' + product.url,
                        changefreq: 'daily',
                        priority: 0.8
                    };
                    url.lastmod = product.modifyDate || new Date();
                    productUrls.push(url);
                }
            });
            let categories = ([...categoriesSet]).map(url => {
                return {url: url, changefreq: 'weekly', priority: 0.9, lastmod: new Date()}
            });
            options.urls = [...staticUrls, ...categories, ...productUrls];
            let sitemap = sm.createSitemap(options);
            let xml = sitemap.toXML();
            fs.writeFile(path.join(config.path.files, config.settings.sitemapFileName), xml, function (err) {
                if (err) console.log(err);
                res.send('ok');
            });
        });
    }

    yml(req, res, next) {
        let options = req.body;
        operations.getYmlText(options).then(function (yml) {
            fs.writeFile(path.join(config.path.files, 'yml.xml'), yml, function (err) {
                if (err) return next(err);
                res.send(yml);
            });
        });

    }

    resizeAll(req, res, next) {
        let resizeFunctions = [];
        bll.product.selectAll({take: 0, projection: {'_id': 1, 'photos': 1}}).exec((err, products) => {
            products.forEach(product => {
                let folder = path.join(config.path.photo, product._id.toString());

                product.photos.forEach(photo => {
                    let resizeFunction = function (callback) {
                        let file = path.join(folder, photo.fileId),
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