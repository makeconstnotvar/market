const bll = require('../../api/business'),
    series = require("async/series"),
    views = require('./views'),
    position = require('./position'),
    _ = require('underscore');

module.exports = function (uid, params) {
    return new Promise((resolve,reject)=>{
        let url = params.pid,
            imageId = params.image,
            categoryUrl = params.categoryUrl;

        series({
            product: getProduct,
            randoms: getRandom,
            contract: getContract
        }, processView);

        function getProduct(callback) {
            bll.product.select({
                query: {$or: [{url: url}, {historyUrls: url}], publish: true}
            }).populate('category').populate('parameters.parameter').lean().exec((err, product) => {
                if (err)
                    callback(err);
                if (!product || product.category.url !== categoryUrl) {
                    resolve({notfound:true})

                }
                else {
                    if (product.historyUrls && product.historyUrls.includes(url)) {
                        let redirect = `/${product.category.url}/${product.url}`;
                        resolve({redirect});
                    }
                    else {
                        product.categoryUrl = categoryUrl;
                        product.imageId = imageId;
                        callback(null, product)
                    }

                }
            })
        }

        function getRandom(callback) {
            bll.category.select({query: {url: categoryUrl}}).exec((err, category) => {
                bll.product.model.findRandom({category: category._id, count:{$gte:1}},{
                    'name': 1,
                        'price': 1,
                        'discount': 1,
                        'count': 1,
                        'url': 1,
                        'category': 1,
                        'photos': {$elemMatch: {fileType: 'cover'}},
                    'photos.fileId': 1
                }).populate('category').limit(4).exec((err, products) => {
                    if (err) callback(err);
                    else callback(null, products)
                });
            })
        }

        function getContract(callback) {
            bll.contract.select({query: {uid: uid, status: 'temp'}}).lean().exec((err, contract) => {
                if (err) callback(err);
                else callback(null, contract)
            })
        }

        function processView(err, results) {
            if (err) reject(err);
            let product = views.product(results.product, results.contract);
            let meta = {
                description: product.description,
                image: `/photos/${product._id}/${product.images && product.images[0]}`,
                title: product.name
            };
            let randoms = views.specials(results.randoms, results.contract);
            resolve({product, meta, randoms});
        }

    });


};



