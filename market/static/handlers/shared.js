const bll = require('../../api/business');
module.exports = function (uid) {
    return new Promise((resolve, reject) => {
        bll.contract.select({query: {uid, status: 'temp'}}).exec((err, contract) => {
            if (err) reject(err);
            resolve(getCartStatus(contract));
        });
    })
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
