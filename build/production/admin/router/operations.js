let router = require('express').Router(),
    handler = require('../../api/handlers/index').operations;

router.post('/sitemap', handler.sitemap.bind(handler));
router.post('/yml', handler.yml.bind(handler));
router.post('/resizeAll', handler.resizeAll.bind(handler));

module.exports = router;
