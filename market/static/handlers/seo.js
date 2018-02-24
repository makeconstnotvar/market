const bll = require('../../api/business');
module.exports = function (state) {

return new Promise((res,rej)=>{
    bll.settings.select().lean().exec((err, settings) => {
        if (err) return rej(err);
        let result = {};
        if (settings && settings.seoParams) {
            let seo = settings.seoParams.find(seo => seo.state == state);

            if (seo)
                result = {
                    description: seo.description,
                    keywords: seo.keywords,
                    title: seo.title
                };

            res(result);
        }
    })
})

}