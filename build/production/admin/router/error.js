var router = require('express').Router(),
    handler = require('../../api/handlers/index').error;

router.use(handler.notAuth.bind(handler));

module.exports = router;