let express = require('express'),
    handlers = require('./handlers'),
    router = express.Router(),
    seo = require('./handlers/seo');

router.use(function (req, res, next) {
    req.shared = {};
    handlers.shared(req.uid)
        .then(status => {
            req.shared.status = status;
            next();
        }).catch(err => {
        next(err)
    });
});

router.get('/', function (req, res, next) {
    seo('specials').then(seo => {
        seo = seo || {};
        seo.image = '/img/logo.jpg';

        handlers.specials(req.uid)
            .then(products => {
                res.render('specials', {products, seo, status: req.shared.status});
            }).catch(err => {
            next(err)
        })

    }).catch(err => {
        next(err)
    });

});

router.get('/contacts', (req, res) => {
    seo('contacts').then(seo => {
        res.render('contacts', {seo, status: req.shared.status})
    }).catch(err => {
        next(err)
    });
});

router.get('/delivery', (req, res) => {
    seo('delivery').then(seo => {
        res.render('delivery', {seo, status: req.shared.status})
    }).catch(err => {
        next(err)
    });
});

router.get('/cart', function (req, res, next) {
    seo('cart').then(seo => {
        handlers.contract.getData(req.uid).then(data => {
            if (data.current && data.current.positions && data.current.positions.length) {
                res.render('cart', {...data, seo});
            }
            else {
                res.render('empty', {...data, seo});
            }
        })
    });
});

router.post('/cart', function (req, res, next) {
    let {remove} = req.body;
    seo('cart').then(seo => {
        if (remove)
            handlers.contract.remove(req.uid, req.body.pid).then(data => {
                if (data.current && data.current.positions && data.current.positions.length) {
                    res.render('cart', {...data, seo});
                }
                else {
                    res.render('empty', {...data, seo});
                }
            });
        else
            handlers.cartpost(req.body).then(data => {
                res.render('done', {...data, seo})
            });
    });
});
router.post('/cart/remove', function (req, res, next) {

    seo('cart').then(seo => {

    });
});

router.get('/cart/:cid', function (req, res, next) {

});
router.get('/:categoryUrl/:pid/:image?', function (req, res, next) {
    handlers.product(req.uid, req.params).then(data => {
        if (data.notfound)
            next();
        else if (data.redirect)
            res.redirect(data.redirect);
        else
            res.render('product', {...data, status: req.shared.status});
    })
});
router.post('/:categoryUrl/:pid/:image?', function (req, res, next) {
    handlers.position(req.uid, req.body.pid).then(status => {
        req.shared.status = status;
        handlers.product(req.uid, req.params).then(data => {
            if (data.notfound)
                next();
            else if (data.redirect)
                res.redirect(data.redirect);
            else
                res.render('product', {...data, status: req.shared.status});
        })
    })
});
router.use((req, res, next) => {
    seo('notfound').then(seo => {
        res.status(404).render('notfound', {seo, status: req.shared.status})
    });
});

module.exports = router;