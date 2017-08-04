const express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    dot = require('express-dot-engine'),
    config = require('../config.json'),
    configWeb = require(path.join(config.path.public, config.settings.configWebFileName)),
    secure = require('../api/handlers').secure,
    apiRouter = require('./router'),
    urls = require(path.join(config.path.public, config.settings.urlsFileName));

app.use('/api', apiRouter);
app.use('/', secure.cookies, function (req, res, next) {
    let ua = req.headers['user-agent'];
    if (/bot|google|yandex|mail\.ru|bing|embedly|guzzlehttp|validator|vk\.com|facebook|slurp|tumblr|undefined|seopult|mailru|mrpc|ok\.ru/i.test(ua)) {
        console.log('робот: ' + ua + ' url: ' + req.url);
        fs.access(path.join(config.path.prerender, req.url, 'index.html'), fs.R_OK, (err) => {
            if (err) {
                res.status(404);
                return next();
            }
            res.sendFile('index.html', {root: path.join(config.path.prerender, req.url)});
        });
    }
    else {
        console.log('юзер: ' + ua + ' url: ' + req.url);
        res.sendFile('index.html',{root:path.join(__dirname,'web')});
    }
});

app.use(function (req, res, next) {
    console.error("сработало 404");

    //res.redirect('/error?url='+req.url);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    err.userMessage = err.userMessage || 'На сервере произошла ошибка';
    if (res.status() == 200)
        res.status(500);
    res.send(err.userMessage);
});


module.exports = app;
