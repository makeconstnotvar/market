var router = require('express').Router(),
    path = require('path'),
    apiHandlers = require('../api/handlers/index');

router.get('/login', function (req, res, next){
    res.sendFile('login.html', {root: path.join(__dirname, 'web/views')})
});
router.post('/login', apiHandlers.secure.login);
router.use(apiHandlers.secure.auth);
router.use(function(req, res, next){
    res.sendFile('index.html', {root: path.join(__dirname, 'web/views')});
});
router.use(function(err, req, res, next){
    if (res.statusCode === 400 || res.statusCode === 401) {
        console.error("сработало 404 в админе " + req.url);
        res.redirect('/admin/login?url=' + req.url);
    }
    else next(err);
});

module.exports = router;


