var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    parameter: {type: mongoose.Schema.Types.ObjectId, ref: 'Parameter'},
    order: Number,
    selected: mongoose.Schema.Types.ObjectId
});