const express = require('express'),
    app = express(),
    path = require('path'),
    secure = require('../api/handlers').secure,
    routes = require('./routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/', secure.cookies, routes);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    res.render('error');
});

module.exports = app;
