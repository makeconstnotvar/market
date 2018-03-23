let express = require('express'),
    handlers = require('./handlers'),
    router = express.Router(),
    seo = require('./handlers/seo');

router.use(async (req, res, next) => {
    req.shared = {
        status: await handlers.shared(req.uid)
    };
    next();
});

router.get('/', async (req, res, next) => {
    let meta = seo('specials');
    meta.image = '/img/logo.jpg';
    let products = await handlers.specials(req.uid);
    res.render('specials', {products, meta, status: req.shared.status});
});

router.get('/contacts', async (req, res) => {
    let meta = seo('contacts');
    res.render('contacts', {meta, status: req.shared.status})

});

router.get('/delivery', async (req, res) => {
    let meta = seo('delivery');
    res.render('delivery', {meta, status: req.shared.status})

});

router.get('/cart', async (req, res, next) => {
    let meta = seo('cart');
    let data = await handlers.contract.getData(req.uid);
    if (data.current && data.current.positions && data.current.positions.length) {
        res.render('cart', {...data, meta});
    }
    else {
        res.render('empty', {...data, meta});
    }
});

router.get('/cart/:cid', async (req, res, next) => {
    let meta = seo('history');
    let contract = await handlers.contract.history(req.params.cid);
    res.render('history', {contract, meta, status: req.shared.status});
});

router.post('/cart', async (req, res, next) => {
    let {remove} = req.body;
    let meta = seo('cart');
    if (remove) {
        let data = await handlers.contract.remove(req.uid, req.body.pid);
        if (data.current && data.current.positions && data.current.positions.length) {
            res.render('cart', {...data, seo});
        }
        else {
            res.render('empty', {...data, seo});
        }
    }
    else {
        let data = await handlers.contract.place(req.body);
        res.render('done', {...data, meta})
    }
});

router.get('/:categoryUrl/:pid/:image?', async (req, res, next) => {
    let data = await handlers.product(req.uid, req.params);
    if (data.notfound)
        next();
    else if (data.redirect)
        res.redirect(data.redirect);
    else
        res.render('product', {...data, status: req.shared.status});
});

router.post('/:categoryUrl/:pid/:image?', async (req, res, next) => {
    req.shared.status = await handlers.position(req.uid, req.body.pid);
    let data = await handlers.product(req.uid, req.params);
    if (data.notfound)
        next();
    else if (data.redirect)
        res.redirect(data.redirect);
    else
        res.render('product', {...data, status: req.shared.status});
});

router.use(async (req, res, next) => {
    let meta = seo('notfound');
    res.status(404).render('notfound', {meta, status: req.shared.status})
});

module.exports = router;