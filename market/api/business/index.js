'use strict';

var Account = require('./account'),
    Product = require('./product'),
    Category = require('./category'),
    Parameter = require('./parameter'),
    Template = require('./template'),
    Contract = require('./contract'),
    Settings = require('./settings'),
    Log = require('./log'),
    File = require('./file');

module.exports = {
    account: new Account(),
    product: new Product(),
    category: new Category(),
    parameter: new Parameter(),
    template: new Template(),
    contract: new Contract(),
    settings: new Settings(),
    log: new Log(),
    file: new File()
};