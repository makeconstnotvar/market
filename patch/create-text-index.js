var mongoClient = require('mongodb').MongoClient,
    waterfall = require('async/waterfall'),
    config = require('../market/config'),
    baseName = config.system.baseName;

//входит в состав patch-to-mongoose
mongoClient.connect('mongodb://127.0.0.1:27017/' + baseName, (err, db) => {
    waterfall([
        createProductsFts,
        createParamsFts
    ], processResult);
    function createProductsFts(callback) {
        //создать полнотекстовый индекс для поиск продуктов
        db.collection('products').createIndex({
            name: "text",
            code: "text",
            details: "text",
            description: "text",
            information: "text"
        }, {
            weights: {
                name: 60,
                code: 50,
                details: 40,
                description: 30,
                information: 20
            },
            name: "ProductIndex",
            default_language: "russian"
        }, function (err, result) {

            callback(null);
        })
    }

    function createParamsFts(callback) {
        //создать полнотекстовый индекс для поиск параметроав
        db.collection('parameters').createIndex({
            name: "text",
            details: "text"
        }, {
            weights: {
                name: 20,
                details: 10
            },
            name: "ParameterIndex",
            default_language: "russian"
        }, function (err, result) {
            callback(null);
        })
    }

    function processResult(err, result) {
        db.close();
        if (!err) {
            console.log('all updated');
            process.exit(0);
        }
        else {
            console.dir(err);
            process.exit(1);
        }
    }
});