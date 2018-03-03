const bll = require('../../api/business');
module.exports = function (state) {

    return new Promise((res, rej) => {

        bll.settings.select().lean().exec((err, settings) => {
            if (err) return rej(err);
            let seo = {};
            if (settings && settings.seoParams) {
                seo = settings.seoParams.find(seo => seo.state === state) || {};
            }
            res({
                title: seo.title,
                description: seo.description
            });
        })
    })
};