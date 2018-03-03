const bll = require('../../api/business'),
    views = require('./views'),
    seo = require('./seo');


module.exports = function (req, res, next) {
    let options = {
        query: {publish: true,price:{$gt:0}},
        order: {count: -1, _id: -1,},
        take: 0,
        projection: {
            'name': 1,
            'price': 1,
            'discount': 1,
            'count': 1,
            'url': 1,
            'category': 1,
            'photos': {$elemMatch: {fileType: 'cover'}},
            'photos.fileId': 1
        }
    };
    seo('specials').then(seo => {
        seo = seo||{};
        seo.image = '/img/logo.jpg';

        bll.contract.select({query: {uid: req.uid, status: 'temp'}})
            .populate('positions.product').lean().exec((err, contract) => {
            if (err) next(err);

            bll.product.selectAll(options).populate('category').lean().exec((err, products) => {
                if (err) return next(err);

                views.specials(products, contract);

                res.render('specials', {products, seo})
            });
        });
    });
};

