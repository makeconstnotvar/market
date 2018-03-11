let bll = require('../../api/business'),
    seo = require('../handlers/seo'),
    contractor = require('./contract');
module.exports = function (req, res, next) {

    let {phone, name, address, auto, note, sendSms, manual} = req.body;
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

    seo('cart').then(seo => {
        bll.contract.update(contract).exec((err, contract) => {
            if (err) return next(err);
            contractor.sendMySms(contract);

            res.render('done', {
                // _id: contract._id,
                //date: contract.date,
                //number: contract.number,
                message: `<strong>Заказ № ${contract.number} принят.</strong> Скоро наш менеджер свяжется с вами.`,
                //status: contractor.getStatusName(contract.status),
                seo, status:req.shared.status
            });
        });
    });
};

