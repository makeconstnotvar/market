let app = require('express')(),
    path = require('path'),
    config = require('../config.json'),
    minifyHTML = require('express-minify-html'),
    serverjs, engine,
    xhr2 = require('xhr2');

xhr2.prototype._restrictedHeaders = {};

try {
    serverjs = require(config.path.serverjs);
}
catch (err) {
    console.error(`Не найден файл server.js по адресу "${config.path.serverjs}.js"`);
}


app.use('/', function (req, res) {
    if (serverjs) {
        let prodivers = [
            {provide: 'serverUrl', useValue: config.system.host},
            {provide: 'expressRequest', useValue: req}
        ];

        engine = serverjs.expressEngine(prodivers);
        app.engine('html', engine);
        app.set('view engine', 'html');
        app.set('views', path.join(__dirname, 'web/views'));
        app.use(minifyHTML({
            override: true,
            htmlMinifier: {
                removeAttributeQuotes: false,
                collapseBooleanAttributes: false,
                //minifyJS: false,
                removeEmptyAttributes: false
            }
        }));
        res.render('server', {req, res});
    } else {
        res.status(500).send('Отсутствует возможность рендера html на сервере');
    }

});


module.exports = app;