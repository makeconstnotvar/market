'use strict';

var bll = require('../business'),
    Base = require('./base');


module.exports = class extends Base {
    constructor() {
        super('settings')
    }
    // серверные методы
    upsert(req, res, next) {
        var item = req.body;

        bll.settings.upsert(item).exec((err, entity)=> {
            if (err) return next(err);
            res.send('ok');
        });
    }
    
    // клиентские методы
    meta(req, res, next) {
        var state = req.body.state;
        var url = req.body.url;
        bll.settings.select().lean().exec((err, settings)=> {
            if (err) return next(err);
            var result = {};
            if (settings && settings.seoParams) {
                var seo = settings.seoParams.find(seo=> seo.state == state);

                if (seo)
                    result = {
                        description: seo.description,
                        keywords: seo.keywords,
                        title: seo.title
                    };

                res.send(result);
            }
        })
    }

    config(req, res, next){
        res.send({
            host:'getyourbag.ru',
            phone:'+7926-123-4567'
        })
    }
};