var ObjectId = require('mongodb').ObjectID,
    bll = require('../business'),
    fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    waterfall = require('async/waterfall'),
    config = require('../../config');


var tools = {
    deleteFileSync(path) {
        var exist = fs.existsSync(path);
        if (exist)
            fs.unlinkSync(path);
    },
    getPages (count) {
        var pages = [];
        for (var i = 1; i <= Math.ceil(count / config.settings.pageSize); i++) {
            pages.push(i)
        }
        return pages;
    },
    getParamValue (parameters, ymlName) {
        var selectedParameter, selectedValue;

        selectedParameter = parameters.find(param => param.ymlName == ymlName);

        if (selectedParameter && selectedParameter.values) {
            selectedValue = selectedParameter.values.find(val => val.id == selectedParameter.selected);
        }

        if (selectedValue && selectedValue.value)
            return selectedValue.value;

        return '';

    },
    getCatId (product) {
        if (product.category) {
            switch (product.category.url) {
                case "backpacks":
                    return '2000';
                case 'handbags':
                    return '1000';
            }
        }
    },

    sortPhotos (photos) {
        return photos.sort(item=> {
            var rank = {
                "cover": 10,
                "list": 20,
                "image": 30
            };
            if (item.type == 'image') {
                item.order = item.order || 1;
                return rank[item.type] + item.order;
            }
            else {
                return rank[item.type];
            }
        })

    },

    getTypeByExt(ext) {

        var ext = ext.toLowerCase();
        switch (ext) {
            case '.doc':
            case '.docx':
                return 'fa-file-word-o';
            case '.pdf':
                return 'fa-file-pdf-o';
            case '.xls':
            case '.xlsx':
                return 'fa-file-excel-o';
            case '.txt':
                return 'fa-file-text-o';
            case '.mp4':
            case '.m4v':
            case '.mid':
            case '.mkv':
            case '.webm':
            case '.mov':
            case '.avi':
            case '.wmv':
            case '.mpg':
                return 'fa-file-video-o';
            case '.jpg':
            case '.jpeg':
            case '.png':
            case '.gif':
            case '.webp':
            case '.cr2':
            case '.tif':
            case '.bmp':
            case '.jxr':
            case '.psd':
                return 'fa-file-image-o';
            case '.zip':
            case '.tar':
            case '.rar':
            case '.gz':
            case '.bz2':
            case '.7z':
                return 'fa-file-archive-o';
            case '.mp3':
            case '.m4a':
            case '.ogg':
            case '.flac':
            case '.wav':
                return 'fa-file-audio-o';
            default:
                return 'fa-file-o'
        }
    }
};
module.exports = tools;