var router = require('express').Router(),
        handler = require('../../api/handlers/index').product;

router.post('/select', handler.select.bind(handler));
router.post('/selectAll', handler.selectAll.bind(handler));
router.post('/insert', handler.insert.bind(handler));
router.post('/update', handler.update.bind(handler));
router.post('/category', handler.category.bind(handler));
router.post('/remove', handler.remove.bind(handler));
router.post('/count', handler.count.bind(handler));
router.post('/copy', handler.copy.bind(handler));

module.exports = router;
