var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    date: Date,
    name: String,
    message: String
    
});