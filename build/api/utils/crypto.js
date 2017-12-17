var crypto = require('crypto'),

    config = require('../../config.json'),
    algorithm = config.secure.algorithm,
    secret = config.secure.secret;

module.exports = {
    encryptObj(obj) {
        var text = JSON.stringify(obj);
        var cipher = crypto.createCipher(algorithm, secret);
        var crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },
    decryptToObj(text) {
        if (!text)return {};
        var dec;
        var decipher = crypto.createDecipher(algorithm, secret);
        try {
            dec = decipher.update(text, 'hex', 'utf8');
        }
        catch (e) {
            return {};
        }
        dec += decipher.final('utf8');
        return getJson(dec);
    }

};

function getJson(text) {
    var obj = {};
    try {
        obj = JSON.parse(text);
    }
    catch (e) {
        console.log('Ошибка в JSON.parse')
    }
    return obj;
}