var mongoose = require('mongoose'),
    embeddedParameter = require('./embeddedParameter');



module.exports = new mongoose.Schema({
    name: String,
    selected: String,
    parameters:[embeddedParameter]
    /*parameters: [{
     parameter: {type: mongoose.Schema.Types.ObjectId, ref: 'Parameter'},
     order: Number
     }]*/
});