var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    fileId: String,
    fileType: String,
    url: String,
    name: String,
    alt: String,
    description: String
});