'use strict';

let crypto = require('../utils').crypto,
    cookies = require('cookies'),
    _ = require('underscore'),
    uuid = require('node-uuid'),
    config = require('../../config.json'),
    admins = config.secure.admins;

module.exports = class {
    login(req, res, next) {
        let login = req.body.login,
            password = req.body.password,
            remember = req.body.remember;
        if (!login || !password) {
            return res.status(400).send("Нужно ввести логин и пароль");
        }
        let admin = admins.find((admin) => {
            return admin.login === login
        });
        if (!admin) {
            return res.status(401).send("Не совпадает логин");
        }

        if (admin.password !== password) {
            return res.status(401).send("Не совпадает логин и пароль");
        }
        let oneDay = 24 * 60 * 60 * 1000;
        let oneMonth = oneDay * 31;
        cookies(req, res).set('admin', crypto.encryptObj(admin), {
            secure: config.secure.https,
            maxAge: remember ? oneMonth : oneDay,
            httpOnly: true,
            signed: false,
            domain: config.system.domain
        });
        res.send('ok');
    }

    auth(req, res, next) {
        let cookieVal = cookies(req, res).get('fastlight');
        let data = crypto.decryptToObj(cookieVal, next);
        let exist = admins.find(admin => {
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
        let cookie = cookies(req, res);
        let uid = cookie.get('uid');
        let cookieVal = cookie.get('uid');
        let data = crypto.decryptToObj(cookieVal, next);
        if (!uid) {
            let newUid = uuid.v4();
            req.uid = newUid;
            cookie.set('uid', crypto.encryptObj({uid: uid}), {
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

    getuid(req, res, next) {
        let cookie = cookies(req, res);
        let uid = cookie.get('uid');
        if (uid)
            req.uid = uid;
        next();
    }
};

