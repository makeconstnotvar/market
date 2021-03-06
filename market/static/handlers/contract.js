let bll = require('../../api/business'),
    config = require('../../config'),
    Sms = require('sms_ru'),
    nodemailer = require('nodemailer'),
    moment = require('moment');

moment.locale('ru');

function getCartHistory(histories) {
    let historiesView = [];
    if (histories)
        histories.forEach(function (hist) {
            historiesView.push({
                //_id: hist._id,
                link: `/cart/${hist._id}`,
                date: moment(hist.date).format('DD.MM.YYYY'),
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
        if (config.contacts.sendSms && !contract.notifyAdmin) {
            const sms = new Sms(config.contacts.smsApi);
            sms.sms_send({
                to: config.contacts.myPhone,
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
        if (contract.notifyClient && contract.sendSms && !contract.alreadySent && config.contacts.sendSms) {
            const sms = new Sms(config.contacts.smsApi);
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
        let positionsWithProduct = contract.positions.filter(position => {
            return position.product.toString() === newPosition.product
        });
        if (!positionsWithProduct.length) {
            contract.positions.push(newPosition);
        }
        else {
            if (newPosition.color) {
                let positionsWithColor = positionsWithProduct.find(position => {
                    return (position.color && newPosition.color) ? position.color._id === newPosition.color._id : false;
                });

                if (positionsWithColor) {
                    positionsWithColor.count++;
                    positionsWithColor.sum = newPosition.sum * positionsWithColor.count;
                }
                else contract.positions.push(newPosition);
            }
            else {
                let positionWithoutColor = positionsWithProduct.find(position => {
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

function history(_id) {
    return new Promise((resolve, reject) => {
        bll.contract.select({query:{_id}})
            .deepPopulate('positions.product.category')
            .lean()
            .exec((err,contract)=>{
            if (err) reject(err);

                contract.final = 0;
                contractsCovers(contract);
                contract.positions.forEach(position => {
                    position.product.link = `/${position.product.category.url}/${position.product.url}`;
                    contract.final += position.product.price
                });
                contract.time = moment(contract.date).format('HH:MM');
                contract.date = moment(contract.date).format('DD.MM.YYYY');
                contract.status= getStatusName(contract.status);
            resolve(contract);
        })
    })
}

function remove(uid, pid) {
    return new Promise((resolve, reject) => {

        bll.contract.selectAll({query: {uid}})
            .deepPopulate('positions.product.category')
            .lean()
            .exec((err, contracts) => {
                if (err) reject(err);

                let current = contracts.find(contract => (contract.status === 'temp'));
                let history = getCartHistory(contracts.filter(contract => (contract.status === 'placed' || contract.status === 'progress' || contract.status === 'done')));
                current.positions = current.positions.filter(position => position.product._id.toString() !== pid);

                bll.contract.update(current).lean().exec((err, current) => {
                    if (err) reject(err);

                    current.final = 0;
                    contractsCovers(current);
                    current.positions.forEach(position => {
                        position.product.link = `/${position.product.category.url}/${position.product.url}`;
                        current.final += position.product.price
                    });
                    let status = getCartStatus(current);

                    resolve({
                        current,
                        history,
                        status
                    })
                })


            });


    })

}

function getData(uid) {
    return new Promise((resolve, reject) => {
        bll.contract.selectAll({query: {uid: uid}})
            .deepPopulate('positions.product.category')
            .lean()
            .exec((err, contracts) => {
                if (err) return reject(err);
                let current = contracts.find(contract => (contract.status === 'temp'));
                let history = getCartHistory(contracts.filter(contract => (contract.status === 'placed' || contract.status === 'progress' || contract.status === 'done')));
                if (current && current.positions) {
                    current.final = 0;
                    contractsCovers(current);
                    current.positions.forEach(position => {
                        position.product.link = `/${position.product.category.url}/${position.product.url}`;
                        current.final += position.product.price
                    });
                }
                let status = getCartStatus(current);
                resolve({current, history, status})
            });
    })
}

function place(newContract) {
    return new Promise((resolve, reject) => {
        let {_id, phone, delivery, name, address, note, sendSms} = newContract;
        let contractUpdate = {
            phone,
            name,
            address,
            note,
            sendSms,
            delivery,
            status: 'placed',
            date: new Date()
        };
        contractUpdate.dates = [{
            status: contractUpdate.status,
            date: contractUpdate.date
        }];
        bll.contract.select({query: {_id}}).lean().exec((err, contract) => {
            let contractUpdated = {...contract, ...contractUpdate};
            sendMySms(contractUpdated).then(()=>{contractUpdated.notifyAdmin=true;},()=>{contractUpdated.notifyAdmin=false;}).then(()=>{
                bll.contract.update(contractUpdated).exec((err, contract) => {
                    if (err) reject(err);
                    let status = getCartStatus();
                    resolve({contract, status});
                });
            });



        })

    });
}

module.exports = {
    getData,
    remove,
    place,
    getCartStatus,
    history
};