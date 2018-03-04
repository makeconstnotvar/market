let bll = require('../../api/business'),
    seo = require('../handlers/seo'),
    _ = require('underscore'),
    Sms = require('sms_ru');

function getCartHistory(histories) {
    var historiesView = [];
    if (histories)
        histories.forEach(function (hist) {
            historiesView.push({
                _id: hist._id,
                date: hist.date,
                status: getStatusName(hist.status)
            })
        });
    return historiesView;
}

function contractsCovers(contracts) {

    if (contracts) {
        if (Array.isArray(contracts)) {
            contracts.forEach(contract => {
                contract.positions.forEach(position => {
                    setProductCover(position.product);
                })
            })
        }
        else {
            contracts.positions.forEach(position => {
                setProductCover(position.product);
            })
        }

    }

}

function setProductCover(product) {
    if (product && product.photos) {
        let cover = product.photos.find(photo => {
            return photo.fileType === 'cover';
        });
        if (cover) {
            product.cover = `/photos/${product._id}/s_${cover.fileId}`;
        }
    }
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

function sendMySms(contract) {
    return new Promise((resolve, reject) => {
        if (config.sendSms) {
            const sms = new Sms(config.smsApi);
            sms.sms_send({
                to: config.myPhone,
                text: 'Новый заказ ' + contract.number,
                time: new Date() / 1000 + 60,
                translit: false,
                test: false
            }, function (e) {
                if (e.code == '100') {
                    resolve(e);
                    //balance,code,description,ids
                }
                else {
                    reject(e);
                }
            });
        }
        else
            resolve()

    });
}

function sendSms(contract) {
    return new Promise((resolve, reject) => {
        if (contract.notifyClient && contract.sendSms && !contract.alreadySent && config.sendSms) {
            const sms = new Sms(config.smsApi);
            sms.sms_send({
                to: contract.phone,
                text: contract.smsText,
                translit: false,
                test: false
            }, function (e) {
                if (e.code == '100') {
                    resolve(e);
                    //balance,code,description,ids
                }
                else {
                    reject(e);
                }
            });
        }
        else
            resolve();
    })
}

function getStatusName(statusCode) {
    switch (statusCode) {
        case 'placed':
            return 'новый';
        case 'progress':
            return 'принят';
        case 'done':
            return 'выполнен';
    }

}

function insertContract(uid, newPosition) {
    return new Promise((resolve, reject) => {
        var contract = {
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
        var positionsWithProduct = contract.positions.filter(position => {
            return position.product.toString() == newPosition.product
        });
        if (!positionsWithProduct.length) {
            contract.positions.push(newPosition);
        }
        else {
            if (newPosition.color) {
                var positionsWithColor = positionsWithProduct.find(position => {
                    return (position.color && newPosition.color) ? position.color._id == newPosition.color._id : false;
                });

                if (positionsWithColor) {
                    positionsWithColor.count++;
                    positionsWithColor.sum = newPosition.sum * positionsWithColor.count;
                }
                else contract.positions.push(newPosition);
            }
            else {
                var positionWithoutColor = positionsWithProduct.find(position => {
                    return !position.color
                });
                if (positionWithoutColor) {
                    positionWithoutColor.count++;
                    positionWithoutColor.sum = newPosition.sum * positionWithoutColor.count;
                }
                else contract.positions.push(newPosition);
            }
        }

        bll.contract.update(contract).lean().exec((err, c) => {
            if (err) reject(err);
            resolve(c);
        })
    })
}

function getData(uid) {
    return new Promise((resolve, reject) => {
        seo('cart').then(seo => {
            bll.contract.selectAll({query: {uid: uid}})
                .deepPopulate('positions.product.category')
                .lean()
                .exec((err, contracts) => {
                    if (err) return reject(err);

                    let current = contracts.find(contract => {
                        return contract.status === 'temp';
                    });

                    let history = getCartHistory(contracts.filter(contract => {
                        return contract.status === 'placed' || contract.status === 'progress' || contract.status === 'done';
                    }));

                    if (current && current.positions) {
                        current.final = 0;
                        contractsCovers(current);
                        current.positions.forEach(position => {
                            current.final += position.product.price
                        });
                    }

                    resolve({
                        current,
                        history,
                        seo
                    })

                });
        });
    })
}

module.exports = {
    getData,
    sendMySms,
    getStatusName
}