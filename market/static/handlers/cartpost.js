let bll = require('../../api/business'),
    seo = require('../handlers/seo'),
    contractor = require('./contract');
module.exports = function (newContract) {
    return new Promise((resolve, reject) => {
        let {phone, name, address, auto, note, sendSms, manual} = newContract;
        let delivery;
        if (auto === 'on')
            delivery = 'auto';
        if (manual === 'on')
            delivery = 'manual';
        let contract = {
            phone,
            name,
            address,
            note,
            sendSms,
            delivery
        };
        contract.status = 'placed';
        contract.date = new Date();
        contract.dates = [{
            status: contract.status,
            date: contract.date
        }];
        bll.contract.update(contract).exec((err, contract) => {
            if (err) reject(err);
            contractor.sendMySms(contract);
            resolve(contract);
        });
    });
};

