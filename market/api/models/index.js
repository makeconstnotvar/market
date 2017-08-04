const mongoose = require('./db'),
    account = require('./account'),
    product = require('./product'),
    category = require('./category'),
    contract = require('./contract'),
    parameter = require('./parameter'),
    template = require('./template'),
    log = require('./log'),
    settings = require('./settings');
mongoose.Promise = global.Promise;
module.exports = {
    Account: mongoose.model('Account', account),
    Product: mongoose.model('Product', product),
    Category: mongoose.model('Category', category),
    Contract: mongoose.model('Contract', contract),
    Parameter: mongoose.model('Parameter', parameter),
    Template: mongoose.model('Template', template),
    Settings: mongoose.model('Settings', settings)
};
