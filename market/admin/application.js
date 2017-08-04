var express = require('express'),
    app = express(),
    //morgan = require('morgan'),
    path = require('path'),
    dot = require('express-dot-engine'),
    webRouter = require('./web/router'),
    apiRouter = require('./router');



app.set('views', path.join(__dirname, 'web/views'));
app.set('view engine', 'dot');
app.enable('view cache');
app.engine('dot', dot.__express);
//app.use(morgan('tiny'));
app.use('/api', apiRouter);
app.use('/', webRouter);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    res.status(404);
    err.userMessage = 'Страница ' + req.url + ' не найдена';
    next(err);
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
