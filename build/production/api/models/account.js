var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    login: {type: String, unique: true},
    password: String,
    name: String,
    description: String
});
