let bll = require('../../api/business');


module.exports = function (uid,pid) {
    return new Promise((resolve,reject)=>{



    bll.product.select({query: {_id: pid}}).exec((err, product) => {
        if (err) return reject(err);
        let newPosition = {
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
        };
        bll.contract.select({query: {'uid': uid, status: 'temp'}}).lean().exec((err, contract) => {
            if (err) return reject(err);
            if (contract && contract.positions) {
                updateContract(contract, newPosition)
                    .then(contract => resolve(getCartStatus(contract)))
                    .catch(err =>  {reject(err)});
            }
            else {
                insertContract(uid, newPosition)
                    .then(contract => resolve(getCartStatus(contract)))
                    .catch(err =>  {reject(err)});
            }
        })
    });

    })
};

function insertContract(uid, newPosition) {
    return new Promise((resolve, reject) => {
        let contract = {
            positions: [newPosition],
            uid: uid,
            status: 'temp'
        };
        bll.contract.insert(contract, (err, contract) => {
            if (err) reject(err);
            resolve(contract.toObject());
        })
    })
}


function updateContract(contract, newPosition) {
    return new Promise((resolve, reject) => {
        let positionExist = contract.positions.find(position => position.product.toString() == newPosition.product);
        if (!positionExist) {
            contract.positions.push(newPosition);
        }
        bll.contract.update(contract).lean().exec((err, c) => {
            if (err) reject(err);
            resolve(c);
        })
    })
}

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