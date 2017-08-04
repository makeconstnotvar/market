module.exports = {
    login(req, res, next){
        res.render('login')
    },
    index(req, res, next){
        res.render('index');
    },
    notAuth(err, req, res, next){
        if (res.statusCode == 400 || res.statusCode == 401) {
            console.error("сработало 404 в админе " + req.url);
            res.redirect('/admin/login?url=' + req.url);
        }
        else next(err);
    }
};