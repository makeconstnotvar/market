'use strict';

var bll = require('../business'),
    Base = require('./base');

module.exports = class extends Base {
    constructor() {
        super('template')
    }

    update(req, res, next) {
        //нужно апдейтить параметры продукта
        let item = req.body;

        bll.template.update(item).populate('parameters').exec((err, item)=> {
            let promises = [];
            if (err) return next(err);
            bll.product.selectAll({query: {template: item._id}}).populate('parameters.parameter').exec((err, products)=> {
                products.forEach((product)=> {
                    let p = new Promise((resolve,reject)=>{
                        bll.product.changeParameters(product.toObject(), item.toObject().parameters).exec((err)=> {
                            if (err) return next(err);
                            resolve();
                        });
                    });

                    promises.push(p)
                });
            });
            Promise.all(promises).then(()=> {
                res.send('ok')
            });
        });
    }

    remove(req, res, next) {
        var id = req.body.id;
        bll.category.removeTemplate(id).exec(err=> {
            if (err) return next(err);
            bll.product.removeTemplate(id).exec(err=> {
                if (err) return next(err);
                bll.template.remove(id).exec(err=> {
                    if (err) return next(err);
                    res.send('ok');
                })
            })
        })
    }

};
