var fs = require('fs'),
    eachSeries = require('async/eachSeries'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    prerender = require('./prerender'),
    tools = require('./tools'),
    js2yml = require('./js2yml'),
    bll = require('../business'),
    config = require('../../config');


module.exports = {
    prerenderAll(urls) {
        return new Promise(function (resolve, reject) {
            eachSeries(urls, function (url, callback) {
                console.log('Начинается рендер ' + url);
                prerender(url).then(function (html) {
                    if (/ng\-cloak/i.test(html))
                        console.log('рендер выполнен ' + url);
                    else
                        reject('ошибка рендера ' + url);
                    var mypath = path.join(config.path.prerender, url);
                    mkdirp(mypath, function (err) {
                        if (err) reject(err);
                        fs.writeFile(mypath + '/index.html', html, function (err) {
                            if (err) reject(err);
                            callback(null);
                        });
                    });
                })
            }, function done() {
                resolve();
            });
        });
    },
    getYmlText (options) {

        //todo В перспективе надо забирать продукты порциями, а не все сразу
        return new Promise((resolve, reject)=> {
            var offers = [];
            bll.product.selectAll({
                query: {
                    publish: true,
                    count: {$gt: 0}
                },
                take: 0
            }).populate('category').populate('parameters.parameter').lean().exec((err, products)=> {
                if (err) reject(err);
                products.forEach(product=> {
                    var parameters = product.parameters
                        .filter(p => !p.parameter.ymlName && !p.parameter.field)
                        .map(p => {
                            var selected = p.parameter.values.find(v => v._id.equals(p.selected));
                            if (selected)
                                var value = selected.value;
                            return {name: p.parameter.name, value: value}
                        });

                    var item = {
                        'id': product._id.toString().substring(4, 24),
                        'available': true,
                        'bid': options.bid || 0.1,
                        'url': `${config.system.host}/${product.category.url}/${product.url}`,
                        'price': product.price,
                        'currencyId': 'RUB',
                        'categoryId': product.category.ymlCategoryId,
                        'market_category': product.category.ymlMarketCategory,
                        'store': options.store || false,
                        'pickup': options.pickup || false,
                        'delivery': options.delivery || true,
                        'name': product.name,
                        'vendorCode': product.code,
                        'description': product.description,
                        'sales_notes': options.salesNotes || '',
                        'manufacturer_warranty': options.warranty || false,
                        'param': parameters
                    };
                    item = getFieldsFromParams(item, product.parameters);
                    options.prodoductByImage ? multiplyProducts(product, item, offers) : attachPhotos(product, item, offers);


                });

                var yml = js2yml({
                    'name': config.settings.siteName,
                    'company': config.settings.companyName,
                    'url': config.system.host,
                    'currencies': [{id: 'RUB', rate: '1'}],
                    'categories': require(path.join(config.path.public, config.settings.ymlCategorieFileName)),
                    'delivery-options': [
                        {
                            'cost': options.deliveryCost || 0,
                            'days': options.deliveryDays || 1,
                            'order-before': options.orderBefore
                        }
                    ],
                    'offers': offers
                });
                resolve(yml);
            });
        });
    }
};
function getFieldsFromParams(item, parameters) {
    parameters = parameters.filter(p => !!p.parameter.ymlName);

    parameters.forEach(p => {
        var selected = p.parameter.values.find(v => v._id.equals(p.selected));

        if (selected.value)
            item[p.parameter.ymlName] = selected.value;

    });
    return item;
}
function attachPhotos(product, item, offers) {
    if (product.photos) {
        var arr = [];
        product.photos = tools.sortPhotos(product.photos);
        product.photos.forEach(function (photo) {
            if (photo.fileType == 'image')
                arr.push(`${config.system.host}/photos/${product._id}/${photo.fileId}`)
        });
        item.picture = arr;
    }
    offers.push(item);
}
function multiplyProducts(product, item, offers) {

    var images = product.photos.filter(photo => photo.fileType == 'image');
    images.forEach(image => {
        var newItem = Object.assign({},item);
        newItem.id = image._id.toString().substring(4, 24);
        newItem.url += `/${image._id}`;
        newItem.name += `/${image.alt}`;
        newItem.picture = [`${config.system.host}/photos/${product._id}/${image.fileId}`];
        offers.push(newItem);
    });

}