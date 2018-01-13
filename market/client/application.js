const express = require('express'),
    app = express(),
    secure = require('../api/handlers').secure,
    apiRouter = require('./router'),
    server = require('./server'),
    browser = require('./browser');


app.use('/api', secure.cookies, apiRouter);
app.use('/', secure.cookies, function (req, res, next) {
    let ua = req.headers['user-agent'];
    if (/bot|google|yandex|mail\.ru|bing|embedly|guzzlehttp|validator|vk\.com|facebook|slurp|tumblr|undefined|seopult|mailru|mrpc|ok\.ru/i.test(ua))
        server(req, res, next);
    else
        browser(req, res, next);
});

app.use(function (req, res, next) {
    console.error("сработало 404");
    res.redirect('/error?url='+req.url);
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
