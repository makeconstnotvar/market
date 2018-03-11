const bll = require('../../api/business'),
    views = require('./views');

module.exports = function (uid) {
    return new Promise((resolve, reject) => {
        let options = {
            query: {publish: true, price: {$gt: 0}},
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

        bll.contract
            .select({query: {uid, status: 'temp'}})
            .populate('positions.product')
            .lean()
            .exec((err, contract) => {
                if (err) reject(err);

                bll.product.selectAll(options)
                    .populate('category')
                    .lean()
                    .exec((err, products) => {
                        if (err) reject(err);

                        views.specials(products, contract);

                        resolve(products)
                    });
            });

    });

};

