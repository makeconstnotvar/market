var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    behavior: String,
    name: String,
    url: String,
    unit: String,
    field: String,
    values: [{
        value: String,
        url: String,
        selected: Boolean,
        nomatter: Boolean
    }],
    details: String,
    ymlName: String
});