let seo = require('../handlers/seo');
module.exports = function (req,res,next) {
    seo('cart').then(seo => {
        res.render('cart', {seo})
    });
} ;