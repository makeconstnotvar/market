var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    fileId: String,
    fileType: String,
    name: String,
    alt: String,
    details: String,
    order: Number
});