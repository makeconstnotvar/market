const router = require('express').Router(),
    handler = require('../../api/handlers/index').settings;

router.post('/meta', handler.meta.bind(handler));
router.post('/config', handler.config.bind(handler));

module.exports = router;

