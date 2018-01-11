var sizes = require('./sizes'),
    _ = require('underscore'),
    gm = require('gm');


module.exports = function (type, stream, folder, fileName) {

    return new Promise(function (resolve, reject) {
        var test = sizes[type];
        if (!test) // почему-то нештатные типы есть
            resolve(type);
        var finished = _.after(sizes[type].length, doResponse);

        function doResponse(fileId) {
            return resolve({fileId: fileId});
        }

        sizes[type].forEach(function (size) {
            gm(stream).quality(100)
                .resize(size.width, size.height)
                .write(folder + '/' + size.prefix + fileName, function (err) {
                    if (err) throw err;
                    finished(fileName);
                })
        });

    });
};