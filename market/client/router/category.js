var router = require('express').Router(),
    handler = require('../../api/handlers/index').category;

router.post('/list', handler.list.bind(handler));

module.exports = router;
