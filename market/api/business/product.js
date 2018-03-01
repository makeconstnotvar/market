'use strict';

var models = require('../models'),
    Base = require('./base'),
    mongoose = require('mongoose'),
    tools = require('./tools'),
    ObjectId = mongoose.Types.ObjectId;

module.exports = class extends Base {

    constructor(fieldName) {
        super(fieldName || 'Product')
    }

    changeCategory(productId, categoryId, templateId) {
        return models.Product.findByIdAndUpdate(productId, {$set: {category: categoryId, template: templateId}});
    }

    changeParameters(product, newParams) {
        //product.ts - продукт с параметрами со значениями, объект (не могнуз)
        //newParams - список параметров, объект (не могнуз)

        var product = tools.mongooseToObject(product),
            newParams = tools.mongooseToObject(newParams),
            oldParams = product.parameters,
            parameters = [];
        if (newParams) {
            //подобрать из oldParams поле селектед в новый список параметров
            for (var i = 0; i < newParams.length; i++) {
                var newParameter =  newParams[i];
                var existedOldParam = oldParams.find(function (oldParam) { //тут был find из underscore
                    if (newParams[i].parameter)
                        return newParams[i].parameter.equals(oldParam.parameter._id);
                    return newParams[i]._id.equals(oldParam.parameter._id);
                });
                if (existedOldParam && existedOldParam.selected)
                    newParameter.selected = existedOldParam.selected;
                parameters.push(newParameter);
            }
            product.parameters = parameters;
        }
        return models.Product.findByIdAndUpdate(product._id, product);
    }

    removeParameter(parameterId) {
        return models.Product.update({'parameters.parameter': parameterId}, {$pull: {parameters: {parameter: parameterId}}}, {multi: true});
    }

    removeTemplate(templateId) {
        return models.Product.update({'template': templateId}, {
            $unset: {
                template: true,
                parameters: true
            },
            $set: {publish: false}
        }, {multi: true});
    }
    
    copy(product){
        return new Promise(resolve=>{
            
            resolve();
        })
    }

    /*findRandom(options){
        options = options || {};
        let projection = options.projection || {},
            query = options.query || {};
        return this.model.findRandom(query, projection);
    }*/

};



