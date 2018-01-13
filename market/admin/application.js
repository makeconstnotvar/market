let express = require('express'),
    app = express(),
    webRouter = require('./browser'),
    apiRouter = require('./router');

app.use('/api', apiRouter);
app.use('/', webRouter);

app.use(function (req, res, next) {
    let err = new Error('Not Found');
    res.status(404);
    err.userMessage = 'Страница ' + req.url + ' не найдена';
    next(err);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    err.userMessage = err.userMessage || 'На сервере произошла ошибка';
    if (res.status() === 200)
        res.status(500);
    res.send(err.userMessage);
});
module.exports = app;
