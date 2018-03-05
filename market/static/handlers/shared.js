const bll = require('../../api/business');
module.exports = function (req, res, next) {
    req.shared = {};
    bll.contract.select({query: {uid: req.uid, status: 'temp'}}).exec((err, contract) => {
        if (err) return next(err);
        req.shared.status = getCartStatus(contract);
        next();
    });
};

function getCartStatus(contract) {
    let sum = 0, count = 0;
    if (contract && contract.positions)
        contract.positions.forEach(position => {
            sum += position.sum;
            count += position.count;
        });
    return {
        sum,
        count
    }
}
