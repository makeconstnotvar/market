const express = require('express'),
    helmet = require('helmet'),
    path = require('path'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io')(server),
    config = require('./config'),
    adminApp = require('./admin/application'),
    clientApp = require('./client/application');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());

app.use('/admin', adminApp);
app.use('/', clientApp);

app.set('port', process.env.PORT || config.system.port || '3000');

server.listen(app.get('port'), function () {
    console.log(`Магазин Fastlight запущен http://${config.system.domain} порт:${app.get('port')}`);
});
