var router = require('express').Router(),
    handler = require('../../api/handlers/index').operations;

router.post('/sitemap', handler.sitemap.bind(handler));
router.post('/prerender', handler.prerender.bind(handler));
router.post('/yml', handler.yml.bind(handler));
router.post('/resizeAll', handler.resizeAll.bind(handler));
router.post('/makeUrls', handler.makeUrls.bind(handler));
router.post('/test', handler.test.bind(handler));

module.exports = router;
