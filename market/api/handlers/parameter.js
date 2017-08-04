'use strict';

var bll = require('../business'),
    Base = require('./base'),
    utils = require('../utils'),
    mongoose = require('mongoose'),
    _ = require('underscore');

module.exports = class extends Base {
    constructor() {
        super('parameter')
    }

    // серверные методы

    remove(req, res, next) {
        var id = req.body.id;

        bll.product.removeParameter(id).exec(err=> {
            if (err) next(err);
            bll.template.removeParameter(id).exec(err=> {
                if (err) return next(err);
                bll.parameter.remove(id).exec(err=> {
                    if (err) return next(err);
                    res.send('ok');
                })
            });

        });

    }

    // клиентские методы

    list(req, res, next) {
        let categoryUrl = req.body.catUrl;
        bll.category.select({query: {url: categoryUrl}}).deepPopulate('template.parameters.parameter').lean().exec((err, category)=> {
            if (err) return next(err);
            if (!category) {
                res.status(404);
                return next();
            }
            res.send({
                catid: category._id,
                parameters: getParametersView(category)
            });
        })
    }

    active(req, res, next) {
        var filter = req.body,
            and = [{publish: true}, {'category': filter.catId}],
            query,
            activeValues = [];

        var or = utils.query.getParametersQuery(filter.parameters);
        if (or)
            and = and.concat(or);

        query = {$and: and};

        bll.product.selectAll({
            query: query,
            projection: {'parameters': 1}
        }).populate('parameters.parameter').lean().exec((err, products)=> {
            if (err) return next(err);
            if (products)
                filter.all.forEach(catParameter=> {
                    if (catParameter.values)
                        catParameter.values.forEach(catParamValue=> {
                            products.forEach(product=> {
                                if (product.parameters)
                                    product.parameters.forEach(prodParameter=> {
                                        //if (prodParameter.selected && prodParameter.selected.equals(catParamValue._id))
                                        if (prodParameter.selected && prodParameter.selected.toString() == catParamValue._id)
                                            activeValues.push(catParamValue._id);

                                    })
                            })
                        })
                });
            res.send(_.uniq(activeValues));
        })


    }
};

function getParametersView(category) {
    if (category && category.template && category.template.parameters) {
        return category.template.parameters
            .sort((a, b)=> {
                return (a.order || Infinity) - (b.order || Infinity);
            }).map(p=> {
                return p.parameter
            });

    }
    return [];
}
