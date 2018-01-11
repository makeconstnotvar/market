'use strict';

var config = require('../../config'),
    resizer = require('../utils').resizer,
    bll = require('../business'),
    tools = require('../utils').tools,
    Busboy = require('busboy'),
    path = require('path'),
    fs = require('fs'),
    randomstring = require("randomstring"),
    mammoth = require('mammoth'),
    _ = require('underscore');

module.exports = class {
    insert(req, res) {
        var busboy = new Busboy({headers: req.headers}),
            dataType = req.query.dataType,
            promises = [];

        busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {

            var filesPath = path.join(getFilePath(dataType), fieldname);
            var ext = path.extname(filename);
            var name = randomstring.generate(8) + ext;

            if (!fs.existsSync(filesPath)) {
                fs.mkdirSync(filesPath);
            }

            var promise = new Promise((resolve, reject)=> {
                var subpromise, subpromises = [];

                file.pipe(fs.createWriteStream(path.join(filesPath, name)));
                file.on('end', ()=> {
                    Promise.all(subpromises).then(()=> {
                        var response = {fileId: name};
                        if (dataType != 'photo') {
                            response.fileType = tools.getTypeByExt(ext)
                        }
                        resolve(response)
                    });

                });
                if (dataType == 'photo') {
                    subpromise = resizer('image', file, filesPath, name);
                    subpromises.push(subpromise);
                }
            });
            promises.push(promise);
        });

        busboy.on('finish', function () {
            Promise.all(promises).then(function (test) {
                res.send(test);
            });
        });

        req.pipe(busboy);
    }

    remove(req, res) {
        var params = req.body;
        var folder = path.join(config.path.photo, params.folderId);
        //нужно удалить только для таких префиксов, которые есть в utils.sizes
        tools.deleteFileSync(path.join(folder, 'l_' + params.fileId));
        tools.deleteFileSync(path.join(folder, 'm_' + params.fileId));
        tools.deleteFileSync(path.join(folder, 's_' + params.fileId));
        tools.deleteFileSync(path.join(folder, 'srv_' + params.fileId));
        tools.deleteFileSync(path.join(folder, params.fileId));

        res.send();
    }

    resize(req, res) {
        var params = req.body,
            folder = path.join(config.path.photo, params.folderId),
            file = path.join(folder, params.fileId),
            stream = fs.createReadStream(file);

        tools.deleteFileSync(path.join(folder, 'l_' + params.fileId));
        tools.deleteFileSync(path.join(folder, 'm_' + params.fileId));
        tools.deleteFileSync(path.join(folder, 'srv_' + params.fileId));
        tools.deleteFileSync(path.join(folder, 's_' + params.fileId));

        resizer(params.type, stream, folder, params.fileId).then(test=> res.send(test));

    }

    convert(req, res, next) {
        var productId = req.body.pid,
            file_id = req.body.fid;

        bll.product.select(productId).exec((err, product)=> {
            if (err) next(err);
            if (product.files) {
                var file = _.find(product.files, (f)=> {
                    return f._id == file_id;
                });
                if (file && file.fileType == 'fa-file-word-o') {
                    var filePath = path.join(config.path.files, productId, file.fileId);
                    mammoth.convertToHtml({path: filePath})
                        .then((result)=> {
                            product.fileTemplate = result.value;
                            bll.product.update(product).exec((err, product)=> {
                                if (err) next(err);
                                res.send('ok');
                            })
                        })
                        .done();
                }
            }
        });


    }
};
function getFilePath(dataType) {
    var ext = dataType.toLowerCase();
    switch (ext) {
        case 'photo':
            return config.path.photo;
        case 'file':
            return config.path.files;
        default:
            return config.path.files
    }
}

