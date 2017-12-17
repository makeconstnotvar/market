const router = require('express').Router(),
    handler = require('../../api/handlers').secure;


//router.use('/', handler.cookies.bind(handler));
router.use('/category', require('./category'));
router.use('/parameters', require('./parameter'));
router.use('/product', require('./product'));
router.use('/contract', require('./contract'));
router.use('/settings', require('./settings'));

router.use(function (req,res,next) {
    console.log("api пролетел "+req.url);

    res.send({error:'api не смог обработать запрос'})
});

module.exports = router;