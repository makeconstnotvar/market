'use strict';

var models = require('../models'),
    Base = require('./base');


module.exports = class extends Base {
    constructor(fieldName) {
        super(fieldName ||'Template')
    }

    removeParameter(id) {
        return models.Template.update({'parameters.parameter': id}, {$pull: {parameters:{parameter: id}}}, {multi: true});
    }
};
