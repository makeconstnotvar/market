let path = require('path');
module.exports = {
    login(req, res, next){
        res.sendFile('login.html', {root: path.join(__dirname, 'views')})
    },
    index(req, res, next){
        res.sendFile('index.html', {root: path.join(__dirname, 'views')});
    },
    notAuth(err, req, res, next){
        if (res.statusCode == 400 || res.statusCode == 401) {
            console.error("сработало 404 в админе " + req.url);
            res.redirect('/admin/login?url=' + req.url);
        }
        else next(err);
    }
};