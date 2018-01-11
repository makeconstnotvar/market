var mongoose = require('mongoose'),
    tools = require('./tools'),
    embeddedPhoto = require('./embeddedPhoto');
deepPopulate = require('mongoose-deep-populate')(mongoose);

var contractSchema = new mongoose.Schema({
    uid: String,
    sendSms: Boolean,
    sendMail: Boolean,
    mail: String,
    status:  String, 
    date: Date,
    number: {type: String, default: tools.getContractNumber()},
    delivery: String,
    final: Number,
    phone: String,
    name: String,
    address: String,
    note: String,
    dates: [{
        status: String,
        date: Date
    }],
    notifyClient: Boolean,
    smsText: String,
    correctPhone: String,
    alreadySent: Boolean,
    messages: [{
        ids: String,
        description: String,
        code: String,
        date: Date,
        text: String
    }],
    positions: [{
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
        count: Number,
        sum: Number,
        color: embeddedPhoto
    }]
});

contractSchema.plugin(deepPopulate, {
    populate: {
        'positions.product': {
            select: 'category name url photos price'
        },
        'positions.product.category': {
            select: 'url'
        }
    }
});

module.exports = contractSchema;