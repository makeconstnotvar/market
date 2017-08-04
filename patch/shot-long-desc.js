var mongoose = require('mongoose'),
    waterfall = require('async/waterfall'),
    models = require('../market/api/models'),
    config = require('../market/config');
//входит в состав patch-to-mongoose
mongoose.connect('mongodb://127.0.0.1:27017/' + config.system.baseName);

waterfall([
    updateProductFields,
    updateCategoryFields
], processResult);


function updateProductFields(callback) {
    models.Product.update({}, {$rename: {'details': 'shortDescription', 'information': 'longDescription'}}, {multi: true}, (err)=> {
        callback(err);
    });
}
function updateCategoryFields(callback) {
    models.Product.update({}, {$rename: {'details': 'shortDescription', 'information': 'longDescription'}}, {multi: true}, (err)=> {
        callback(err);
    });
}

function processResult(err,result) {
    if (!err) {
        console.log('all updated');
        process.exit(0);
    }
    else {
        console.dir(err);
        process.exit(1);
    }
}