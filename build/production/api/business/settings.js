
let models = require('../models'),
    Base = require('./base');

module.exports = class extends Base {

    constructor(fieldName) {
        super(fieldName || 'Settings')
    }
    
    upsert(item){
        return models.Settings.findOneAndUpdate({},item,{upsert:true});
    }
};
