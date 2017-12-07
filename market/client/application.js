const express = require('express'),
    app = express(),
    path = require('path'),
    secure = require('../api/handlers').secure,
    apiRouter = require('./router'),
    config = require('../config.json'),
    minifyHTML = require('express-minify-html'),
    serverjs = require('./web/build/server'),
    engine = serverjs.expressEngine;

let prodivers = [
    {provide: 'serverUrl', useValue: config.system.host}
];

app.engine('html', engine(prodivers));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'web/views'));
app.use(minifyHTML({override: true}));

app.use('/api', apiRouter);
app.use('/', secure.cookies, function (req, res) {
    res.render('index', {req, res});
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
