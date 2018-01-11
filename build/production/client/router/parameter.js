var router = require('express').Router(),
    handler = require('../../api/handlers/index').parameter;

router.post('/list', handler.list.bind(handler));
router.post('/active', handler.active.bind(handler));

module.exports = router;
