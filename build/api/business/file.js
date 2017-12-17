'use strict';

var path = require('path'),
    fs = require('fs-extra'),
    config = require('../../config.json');

module.exports = class {
    copy(options) {

        var oldFolder = options.oldFolder,
            newFolder = options.newFolder,
            photosFlag = options.photos || false,
            filesFlag = options.files || false,
            photosPath = config.path.photo,
            filesPath = config.path.files,
            promises = [];
        var oldPhotosFolder = path.join(photosPath, oldFolder);
        if (photosFlag && checkDirectorySync(oldPhotosFolder)) {
            var p1 = new Promise((resolve, reject)=> {
                fs.copy(oldPhotosFolder, path.join(photosPath, newFolder), function (err) {
                    if (err) reject(err);
                    else resolve();
                });
            });
            promises.push(p1);
        }
        var oldFilesFolder = path.join(filesPath, oldFolder);
        if (filesFlag && checkDirectorySync(oldFilesFolder)) {
            var p2 = new Promise((resolve, reject)=> {
                fs.copy(oldFilesFolder, path.join(filesPath, newFolder), function (err) {
                    if (err) reject(err);
                    else resolve();
                });
            });
            promises.push(p2);
        }


        return new Promise((resolve, reject)=> {
            Promise.all(promises).then(function () {
                resolve()
            }).catch(function () {
                reject()
            });
        })
    }
};
function checkDirectorySync(directory) {
    var result = true;
    try {
        fs.statSync(directory);
    } catch (e) {
        result = false;
    }
    return result;
}
