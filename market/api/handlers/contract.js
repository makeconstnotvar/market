'use strict';

var _ = require('underscore'),
    Sms = require('sms_ru'),
    Base = require('./base'),
    bll = require('../business'),
    tools = require('../models/tools'),
    config = require('../../config').contacts;


module.exports = class extends Base {
    constructor() {
        super('contract')
    }

    // серверные методы
    select(req, res, next) {
        var query = req.body;
        bll.contract.select(query).populate('positions.product').exec((err, contract) => {
            if (err) return next(err);
            res.send(contract);
        });
    }

    selectById(req, res, next) {
        var id = req.body;
        bll.contract.selectById(id).populate('positions.product').exec((err, contract) => {
            if (err) return next(err);
            res.send(contract);
        });
    }

    selectAll(req, res, next) {
        var options = req.body;
        bll.contract.selectAll(options).populate('positions.product').exec((err, contracts) => {
            if (err) return next(err);
            res.send(contracts);
        });
    }

    update(req, res, next) {
        var item = req.body;
        bll.contract.update(item).exec((err, contract) => {
            if (err) return next(err);
            res.send('ok');
        });
        /*sendSms(item)
            .then(sms => {
                    item.alreadySent = true;
                    item.messages.push({
                        code: sms.code,
                        description: sms.description,
                        ids: sms.ids,
                        date: new Date(),
                        text: item.smsText
                    });
                    return;
                },
                error => {
                    return;
                })

            .then(() => {

            })*/


    }

    // клиентские методы
    cartStatus(req, res, next) {
        bll.contract.select({query: {uid: req.uid, status: 'temp'}}).exec((err, contract) => {
            if (err) return next(err);
            res.send(getCartStatus(contract));
        });
    }

    cart(req, res, next) {
        var uid = req.uid;

        bll.contract.selectAll({query: {uid: uid}})
            .deepPopulate('positions.product.category')
            .lean()
            .exec((err, contracts) => {
                if (err) return next(err);

                var current = contracts.filter(contract => {
                    return contract.status == 'temp';
                });

                contractsCovers(current);

                var history = contracts.filter(contract => {
                    return contract.status == 'placed' || contract.status == 'progress' || contract.status == 'done';
                });

                res.send({
                    current: current && current.length ? current[0] : {},
                    history: getCartHistory(history)
                });
            });


    }

    getById(req, res, next) {
        var id = req.body.id,
            uid = req.uid;

        bll.contract.select({query: {uid: uid, _id: id}})
            .deepPopulate('positions.product.category')
            .lean().exec((err, contract) => {
            if (err) return next(err);
            contract.statusName = getStatusName(contract.status);
            contractsCovers(contract);

            res.send(contract);
        });
    }

    position(req, res, next) {
        //подразумеваем, что при посте приходит 1 позиция c 1 продуктом, а не целый контракт
        var newPosition = req.body,
            uid = req.uid;

        bll.contract.select({query: {'uid': uid, status: 'temp'}}).lean().exec((err, contract) => {
            if (err) return next(err);
            if (contract && contract.positions) {
                updateContract(contract, newPosition)
                    .then(contract => res.send(getCartStatus(contract)))
                    .catch(err => next(err));
            }
            else {
                insertContract(uid, newPosition)
                    .then(contract => res.send(getCartStatus(contract)))
                    .catch(err => next(err));
            }
        })

    }

    placeContract(req, res, next) {
        let contract = req.body;
        contract.number = tools.getContractNumber();
        contract.status = 'placed';
        contract.date = new Date();
        contract.dates = [{
            status: contract.status,
            date: contract.date
        }];
        bll.contract.update(contract).exec((err, contract) => {
            if (err) return next(err);
            sendMySms(contract);
            res.send({
                _id: contract._id,
                date: contract.date,
                number: contract.number,
                status: getStatusName(contract.status)
            });
        });
    }

    updateContract(req, res, next) {
        var contract = req.body;

        contract.dates = [{
            status: contract.status,
            date: new Date()
        }];
        bll.contract.update(contract).exec((err, contract) => {
            if (err) return next(err);

            res.send(getCartStatus(contract));
        })
    }
};


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
            _.each(contracts, contract => {
                _.each(contract.positions, position => {
                    setProductCover(position.product);
                })
            })
        }
        else {
            _.each(contracts.positions, position => {
                setProductCover(position.product);
            })
        }

    }

}

function setProductCover(product) {
    if (product && product.photos) {
        var cover = product.photos.find(photo => {
            return photo.fileType == 'cover';
        });
        if (cover) {
            product.cover = cover.fileId;
        }
        delete product.photos
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

