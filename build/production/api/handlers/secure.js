'use strict';

var crypto = require('../utils').crypto,
    cookies = require('cookies'),
    _ = require('underscore'),
    uuid = require('node-uuid'),
    config = require('../../config.json'),
    admins = config.secure.admins;

module.exports = class {
    login(req, res, next) {
        var login = req.body.login,
            password = req.body.password,
            remember = req.body.remember;
        if (!login || !password) {
            return res.status(400).send("Нужно ввести логин и пароль");
        }
        var admin = admins.find((admin)=> {
            return admin.login === login
        });
        if (!admin) {
            return res.status(401).send("Не совпадает логин");
        }

        if (admin.password !== password) {
            return res.status(401).send("Не совпадает логин и пароль");
        }
        var oneDay = 24 * 60 * 60 * 1000;
        cookies(req, res).set('fastlight', crypto.encryptObj(admin), {
            secure: config.secure.https,
            maxAge: remember ? 31 * oneDay : oneDay,
            httpOnly: true,
            signed: false,
            domain: config.system.domain
        });
        res.send('ok');
    }

    auth(req, res, next) {
        var cookieVal = cookies(req, res).get('fastlight');
        var data = crypto.decryptToObj(cookieVal, next);
        var exist = admins.find(admin=> {
            return _.isEqual(admin, data);
        });
        if (exist) {
            next();
        }
        else {
            res.status(401);
            next(new Error("Ошибка авторизации"))
        }
    }

    cookies(req, res, next) {
        var cookie = cookies(req, res);
        var uid = cookie.get('uid');
        //var cookieVal = cookie.get('uid');
        //var data = crypto.decryptToObj(cookieVal, next);
        if (!uid) {
            var newUid = uuid.v4();
            req.uid = newUid;
            cookie.set('uid',  newUid/*crypto.encryptObj({uid: uid})*/, {
                secure: config.secure.https,
                maxAge: 365 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                signed: false,
                domain: config.system.domain
            });
        } else {
            req.uid = uid;
        }
        console.log(req.uid);
        next();
    }

    cookies1(req, res, next){
        var cookie = cookies(req, res);
        var uid = cookie.get('uid');
        if(!uid)
            console.log('нет куки');
        else
            req.uid = uid;
        next();
}
};

