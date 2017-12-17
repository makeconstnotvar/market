var router = require('express').Router(),
    handler = require('../../api/handlers/index').contract;

router.post('/select', handler.getById.bind(handler));
router.post('/cart', handler.cart.bind(handler));
router.post('/status', handler.cartStatus.bind(handler));
router.post('/place', handler.placeContract.bind(handler));
router.post('/update', handler.updateContract.bind(handler));
router.post('/position', handler.position);

module.exports = router;