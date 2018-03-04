let express = require('express'),
    handlers = require('./handlers'),
    router = express.Router(),
    seo = require('./handlers/seo');


router.get('/', handlers.specials);
router.get('/contacts', (req, res) => {
    seo('contacts').then(seo => {
        res.render('contacts', {seo})
    });
});
router.get('/delivery', (req, res) => {
    seo('delivery').then(seo => {
        res.render('delivery', {seo})
    });
});
router.get('/cart', handlers.cart);
router.post('/cart', handlers.cartpost);
router.get('/cart/:cid', handlers.history);
router.get('/:categoryUrl/:pid/:image?', handlers.product);
router.use((req, res) => {
    seo('notfound').then(seo => {
        res.render('notfound', {seo})
    });
});

// error handler

module.exports = router;