var Horseman = require('node-horseman'),
    config = require('../../config');
var horseman = new Horseman();

module.exports = function (path) {
    var url = config.system.host + path;
    return new Promise((resolve, reject)=> {

        console.log(url);
        var promise = horseman
            .open(url)
            .evaluate(function () {
                $('script').remove();
            })
            .html();
        promise.then(html=> {

            return resolve(html)
        }).catch(err=> {
            throw err;
        })

    })


};