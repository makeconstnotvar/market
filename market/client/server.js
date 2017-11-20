let app = require('express')(),
    path = require('path'),
    config = require('../config.json'),
    minifyHTML = require('express-minify-html'),
    serverjs = require('./web/build/server'),
    engine = serverjs.expressEngine;

    app.engine('html', engine);
    app.set('view engine', 'html');
    app.set('views', path.join(__dirname, 'web/views'));
    app.use(minifyHTML({override: true}));

    app.use('/', function (req, res) {
        res.render('server', {req, res});
    });



module.exports = app;