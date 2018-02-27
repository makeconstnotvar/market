let express = require('express'),
    handlers  = require('./handlers'),
    router = express.Router();


router.get('/', handlers.specials);
router.get('/contacts', (req, res) => {
    res.render('contacts')
});
router.get('/delivery', (req, res) => {
    res.render('delivery')
});
router.get('/cart', handlers.cart);
router.get('/history', handlers.history);
router.get('/:categoryUrl/:pid/:image?', handlers.product);
router.post('/contract', handlers.contract);
router.use((req, res) => {
    res.render('notfound');
});

// error handler

module.exports = router;