let seo = require('../handlers/seo');

module.exports = function (req, res, next) {
    seo('history').then(seo => {
        res.render('history',       {seo})
    });
};