'use strict';

const bll = require('../business');

module.exports = class {
    constructor(entityName) {
        if (!entityName) throw {
            userMessage: 'Необходимо определить название сущности "entityName"',
            code: 500
        };
        
        this.entity = bll[entityName];
    }

    select(req, res, next) {
        let options = req.body;
        this.entity.select(options).exec((err, entity)=> {
            if (err)return next(err);
            res.send(entity || {});
        });
    }

    selectAll(req, res, next) {
        let options = req.body;
        this.entity.selectAll(options).exec((err, entities)=> {
            if (err)return next(err);
            res.send(entities || []);
        });
    }

    update(req, res, next) {
        let item = req.body;

        this.entity.update(item).exec((err, entity)=> {
            if (err) return next(err);
            res.send('ok');
        });
    }

    insert(req, res, next) {
        let item = req.body;

        this.entity.insert(item, (err, entity) => {
            if (err) return next(err);

            res.send(entity._id);
        });
    }

    remove(req, res, next) {
        let id = req.body.id;
        this.entity.remove(id).exec(err=> {
            if (err) next(err);
            res.send('ok');
        })
    }

    count(req, res, next) {
        let options = req.body,
            query = options.query || {};
        this.entity.count(query).exec((err, count)=> {
            if (err)return next(err);
            res.send({count: count});
        });
    }
};