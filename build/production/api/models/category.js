var mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose),
    embeddedPhoto = require('./embeddedPhoto'),
    embeddedFile = require('./embeddedFile');

var categorySchema = new mongoose.Schema({
    name: String,
    url: String,
    urlText: String,
    publish: {type: Boolean, default: false},
    details: String,
    
    title: String,
    description: String,
    keywords: String,
    shortDescription: String,
    longDescription: String,

    ymlCategoryId: Number,
    ymlMarketCategory: String,
    parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    order: {type: Number, default: 0},
    level: {type: Number, default: 0},
    template: {type: mongoose.Schema.Types.ObjectId, ref: 'Template'},
    photos: [embeddedPhoto],
    files: [embeddedFile]
});

categorySchema.plugin(deepPopulate);

module.exports = categorySchema;