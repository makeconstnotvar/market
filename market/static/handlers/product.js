const bll = require('../../api/business'),
    series = require("async/series"),
    _ = require('underscore');

module.exports = function (req, res, next) {
    let url = req.params.pid,
        imageId = req.params.image,
        categoryUrl = req.params.categoryUrl,
        uid = req.uid;

    series({
        product: getProduct,
        contract: getContract
    }, processView);

    function getProduct(callback) {
        bll.product.select({
            query: {$or: [{url: url}, {historyUrls: url}], publish: true}

        }).populate('category').populate('parameters.parameter').lean().exec((err, product) => {
            if (err)
                callback(err);
            if (!product || product.category.url!==categoryUrl) {
                res.setStatus(404).render('notfound', {requestUrl: url});
            }
            else {
                if (product.historyUrls && product.historyUrls.includes(url)) {
                    let redirectUrl = `/${product.category.url}/${product.url}`;
                    res.redirect(redirectUrl);
                }
                else {

                    callback(null, product)
                }

            }
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
        let product = getViewFields(results.product, results.contract);
        let seo = {
            description: product.description,
            image: `/photos/${product._id}/${product.images && product.images[0]}`,
            title: product.name
        };
        res.render('product', {product, seo});
    }

    function getViewFields(product, contract) {
        product.available = product.count > 0;
        product.photos = product.photos.filter(photo => photo.fileType === 'image');

        if(product.discount && product.price)
            product.bonus = product.discount - product.price;

        if (product.photos) {
            product.photos = product.photos.sort((f1, f2) => f1.order - f2.order);
            product.images = product.photos.map(photo => {
                return {
                    url: `/${categoryUrl}/${product.url}/${photo._id}`,
                    src: `/photos/${product._id}/l_${photo.fileId}`
                }
            });
            let photo = product.photos.find(photo => photo._id.toString() === imageId);

            product.selectedImageSrc = photo ? `/photos/${product._id}/l_${photo.fileId}` : product.images[0].src;
        }

        if (contract && contract.positions) {
            let inCart = _.find(contract.positions, function (position) {
                if (position.product)
                    return product._id.equals(position.product)
            });

            product.inCart = !!inCart;

        }
        if (product.parameters) {
            let combinedParameters = [];
            for (let i = 0; i < product.parameters.length; i++) {
                if (product.parameters[i].parameter && !product.parameters[i].parameter.field) {
                    let parameter = {
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

    function getValue(paramContainer) {
        let foundValue = '';
        let exist = _.find(paramContainer.parameter.values, val => {
            return val._id.equals(paramContainer.selected)
        });
        if (exist)
            foundValue = exist.value;

        return foundValue;
    }
};



