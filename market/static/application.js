const express = require('express'),
    app = express(),
    path = require('path'),
    secure = require('../api/handlers').secure,
    routes = require('./routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/', secure.cookies, routes);



module.exports = app;
