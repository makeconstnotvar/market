'use strict';

const models = require('../models');

module.exports = class {

    constructor(modelName) {
        if (!modelName) throw {
            userMessage: 'Необходимо определить название модели "modelName"',
            code: 500
        };
        this.model = models[modelName];
    }

    select(options) {
        options = options || {};
        let projection = options.projection || {},
            query = options.query || {};
        return this.model.findOne(query, projection);
    };

    selectById(id) {
        return this.model.findById(id);
    };

    selectAll(options) {
         options = options || {};
          let  projection = options.projection || {},
            query = options.query || {},
            order = options.order || {name: 1},
            skip = options.skip || 0,
            take = options.take === 0 ? options.take : options.take || 10;

        return this.model.find(query, projection).sort(order).skip(skip).limit(take);
    };

    insert(newProduct, callback) {
        let product = new this.model(newProduct);
        return product.save(callback);
    };

    update(product) {
        return this.model.findByIdAndUpdate(product._id, product, {new: true});
    };

    remove(id) {
        return this.model.find({_id: id}).remove();
    };

    count(query) {
        return this.model.count(query)
    }
};



