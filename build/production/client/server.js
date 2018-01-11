let app = require('express')(),
    path = require('path'),
    config = require('../config.json'),
    minifyHTML = require('express-minify-html'),
    serverjs, engine;

try {
    serverjs = require(config.path.serverjs);
}
catch (err) {
    console.error(`Не найден файл server.js по адресу "${config.path.serverjs}.js"`);
}
if (serverjs) {
    let prodivers = [
        {provide: 'serverUrl', useValue: config.system.host}
    ];

    engine = serverjs.expressEngine(prodivers);
    app.engine('html', engine);
    app.set('view engine', 'html');
    app.set('views', path.join(__dirname, 'web/views'));
    app.use(minifyHTML({
        override: true,
        removeAttributeQuotes: false,
        collapseBooleanAttributes: false,
        //minifyJS: false,
        removeEmptyAttributes: false
    }));

    app.use('/', function (req, res) {
        res.render('server', {req, res});
    });
}
else {
    app.use('/', function (req, res) {
        res.status(500).send('Отсутствует возможность рендера html на сервере');
    });
}


module.exports = app;