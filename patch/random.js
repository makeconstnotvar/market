//Добавляет рендом в коллекцию продуктов, т.к. это нужно для показа случайных продуктов в карточке. запускается отдельно от patch-to-mongoose

const mongoClient = require('mongodb').MongoClient,
    api = require('../market/api/business'),
    config = require('../market/config'),
    baseName = config.system.baseName;

mongoClient.connect('mongodb://127.0.0.1:27017/' + baseName, (err, db) => {
    api.product.model.syncRandom(function (err, result) {
        db.close();
        if (!err) {
            console.log('all updated');
            process.exit(0);
        }
        else {
            console.dir(err);
            process.exit(1);
        }
        //console.log(result.updated);
    });
});

