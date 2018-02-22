let express = require('express'),
    router = express.Router();


router.get('/', handlers.about);
router.get('/contacts', (req, res)=>{
    res.render('contacts')
});
router.get('/portraits', handlers.gallery('portraits'));
router.get('/portraits/:page', handlers.gallery('portraits'));
router.get('/others', handlers.gallery('others'));
router.use(function(req, res, next) {
    res.render('notfound');
});

// error handler
router.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = router;