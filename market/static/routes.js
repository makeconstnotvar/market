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
    });;
});

router.get('/delivery', (req, res) => {
    seo('delivery').then(seo => {
        res.render('delivery', {seo, status: req.shared.status})
    }).catch(err => {
        next(err)
    });;
});

router.get('/cart', function (req, res, next) {
    handlers.contract.getData(req.uid).then(data => {
        if (data.current) {
            res.render('cart', {...data, status: req.shared.status});
        }
        else {
            res.render('empty', {...data, status: req.shared.status});
        }
    }).catch(err => {
        next(err)
    });
});
router.post('/cart', function (req, res, next) {


});
router.get('/cart/:cid', function (req, res, next) {

});
router.get('/:categoryUrl/:pid/:image?', function (req, res, next) {
    handlers.product(req.uid, req.params).then(data => {
        if (data.notfound)
            res.status(404).render('notfound', {requestUrl: req.url});
        else if (data.redirect)
            res.redirect(data.redirect);
        else
            res.render('product', {...data, status: req.shared.status});
    })
});
router.post('/:categoryUrl/:pid/:image?', function (req, res, next) {
    handlers.position(req.uid, req.body.pid).then(status => {
        req.shared.status = status;

    })
});
router.use((req, res, next) => {
    seo('notfound').then(seo => {
        res.render('notfound', {seo, status: req.shared.status})
    });
});

module.exports = router;