var router = require('express').Router(),
    apiHandlers = require('../../api/handlers'),
    uiHandlers = require('./handlers');

router.get('/login', uiHandlers.login);
router.post('/login', apiHandlers.secure.login);
router.use(apiHandlers.secure.auth);
router.use(uiHandlers.index);
router.use(uiHandlers.notAuth);

module.exports = router;