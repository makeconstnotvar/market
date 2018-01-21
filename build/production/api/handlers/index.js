'use strict';

var Account = require('./account'),
    Product = require('./product'),
    Category = require('./category'),
    Parameter = require('./parameter'),
    Template = require('./template'),
    Contract = require('./contract'),
    File = require('./file'),
    Settings = require('./settings'),
    Operations = require('./operations'),
    Secure = require('./secure'),
    Error = require('./error');

module.exports = {
    account: new Account(),
    product: new Product(),
    category: new Category(),
    parameter: new Parameter(),
    template: new Template(),
    contract: new Contract(),
    file: new File(),
    settings: new Settings(),
    operations: new Operations(),
    secure: new Secure(),
    error: new Error()
};