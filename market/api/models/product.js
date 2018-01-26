const mongoose = require('mongoose'),
    embeddedParameter = require('./embeddedParameter'),
    embeddedPhoto = require('./embeddedPhoto'),
    embeddedFile = require('./embeddedFile'),
    tools = require('./tools');

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    code: String,
    article: {type: String, default: tools.getArticle(8)},
    count: {type: Number, default: 0},
    price: {type: Number, default: 0},
    purchase: {type: Number, default: 0},
    special: {type: Boolean, default: false},
    storeNumber: String,
    details: String,
    publish: {type: Boolean, default: false},
    fileTemplate: String,
    url: {type: String, unique: true, required: true},
    historyUrls: [String],
    title: String,
    description: String,
    keywords: String,
    stock: {type: Boolean, default: false},
    stockText: String,
    modifyDate: {type: Date, default: Date.now},
    information: String,
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    photos: [embeddedPhoto],
    files: [embeddedFile],
    videos: [{
        name: String,
        path: String,
        details: String
    }],
    template: {type: mongoose.Schema.Types.ObjectId, ref: 'Template'},
    parameters: [embeddedParameter]
});


module.exports = productSchema;