var router = require('express').Router(),
    handler = require('../../api/handlers/index').product;

router.post('/view', handler.view.bind(handler));
router.post('/list', handler.list.bind(handler));
router.post('/special', handler.special.bind(handler));

module.exports = router;