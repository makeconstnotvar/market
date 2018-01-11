var router = require('express').Router(),
    handler = require('../../api/handlers/index').file;



router.post('/insert', handler.insert.bind(handler));
router.post('/convert', handler.convert.bind(handler));
router.post('/resize', handler.resize.bind(handler));
router.post('/remove', handler.remove.bind(handler));

module.exports = router;