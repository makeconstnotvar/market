'use strict';

var models = require('../models'),
    Base = require('./base');

module.exports = class extends Base {
    constructor(fieldName) {
        super(fieldName || 'Category');
    }

    selectByParent(id) {
        return models.Category.find({'parent': id});
    }

    removeTemplate(id) {
        return models.Category.update({'template': id}, {$unset: {template: true}}, {multi: true});
    }
};
