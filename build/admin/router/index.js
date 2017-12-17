var router = require('express').Router();

router.use(require('./secure'));
router.use('/category', require('./category'));
router.use('/product', require('./product'));
router.use('/file', require('./file'));
router.use('/contract', require('./contract'));
router.use('/template', require('./template'));
router.use('/parameter', require('./parameter'));
router.use('/settings', require('./settings'));
router.use('/operations', require('./operations'));
router.use(require('./error'));

module.exports = router;