var router = require('express').Router(),
    handler = require('../../api/handlers/index').secure;

router.post('/', handler.auth.bind(handler));

module.exports = router;