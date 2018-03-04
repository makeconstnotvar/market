let bll = require('../../api/business'),
    seo = require('../handlers/seo'),
    _ = require('underscore'),
    contract = require('./contract'),
    Sms = require('sms_ru');
module.exports = function (req, res, next) {

    let uid = req.uid;
    contract.getData(uid).then(data => {
        if (data.current) {

            res.render('cart', data);
        }
        else {
            res.render('empty', data);
        }
    })


};

