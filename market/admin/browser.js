var router = require('express').Router(),
    path = require('path'),
    secure = require('../api/handlers/index').secure;

router.get('/login', (req, res) => {
    res.sendFile('login.html', {root: path.join(__dirname, 'web/views')})
});
router.post('/login', secure.login);
router.use(secure.auth, (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'web/views')});
});

router.use((err, req, res, next) => {
    if (res.statusCode === 400 || res.statusCode === 401) {
        console.error("сработало 404 в админе " + req.url);
        res.redirect('/admin/login?url=' + req.url);
    }
    else next(err);
});

module.exports = router;


