'use strict';

var bll = require('../business'),
    Base = require('./base');

module.exports = class extends Base {
    constructor() {
        super('account')
    }
    selectByLogin(req, res, next){
        var login = req.body.login;
        bll.account.selectByLogin(login).exec((err, account)=> {
            if (err) return next(err);
            res.send(account);
        });
    }
};