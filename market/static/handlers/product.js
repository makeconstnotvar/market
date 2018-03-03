const bll = require('../../api/business'),
    series = require("async/series"),
    views = require('./views'),
    _ = require('underscore');

module.exports = function (req, res, next) {
    let url = req.params.pid,
        imageId = req.params.image,
        categoryUrl = req.params.categoryUrl,
        uid = req.uid;

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
                res.setStatus(404).render('notfound', {requestUrl: url});
            }
            else {
                if (product.historyUrls && product.historyUrls.includes(url)) {
                    let redirectUrl = `/${product.category.url}/${product.url}`;
                    res.redirect(redirectUrl);
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
            bll.product.model.findRandom({category: category._id, count:{$gte:1}}).limit(4).exec((err, products) => {
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
        if (err) return next(err);
        let product = views.product(results.product, results.contract);
        let seo = {
            description: product.description,
            image: `/photos/${product._id}/${product.images && product.images[0]}`,
            title: product.name
        };
        let randoms = views.specials(results.randoms, results.contract);
        res.render('product', {product, seo, randoms});
    }


};



