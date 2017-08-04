const mongoClient = require('mongodb').MongoClient,
    api = require('../market/api/business'),
    ObjectId = require('mongodb').ObjectID,
    waterfall = require('async/waterfall'),
    config = require('../market/config'),
    baseName = config.system.baseName;

function translit(str) {
    if (!str) {
        return;
    }
    let tr = 'a b v g d e zh z i y k l m n o p r s t u f h c ch sh shch ~ y ~ e yu ya ~ e'.split(' '),
        ww = '';

    str = str.toLowerCase().trim();
    for (let i = 0; i < str.length; ++i) {
        let cc = str.charCodeAt(i),
            ch = (cc >= 1072 ? tr[cc - 1072] : str[i]);
        ww += ch;
    }
    return (ww.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-\s]/g, '').replace(/[-]{2,}/gim, '-').replace(/^\-+/g, '').replace(/\-+$/g, ''));
}

mongoClient.connect('mongodb://127.0.0.1:27017/' + baseName, (err, db) => {
    waterfall([
        renameCatFields,
        renameParamFields,
        updateParams,
        renameTmplFields,
        updateTmpl,
        updateProducts,
        clearProductCats,
        renameSettingsFields,
        updateSettings,
        createProductsFts,
        createParamsFts
    ], processResult);

    function renameCatFields(callback) {
        //переименовать поле в категориях
        let promises = [];
        db.collection('categories').find().forEach(category => {
            if (category.template) category.template = category.template._id;

            let p = new Promise((resolve, reject) => {
                api.category.update(category).exec(err => {
                    if (err) reject();
                    resolve();
                })
            });
            promises.push(p)
        }, err => {
            if (err) callback(err);
            Promise.all(promises).then(err => {
                console.log('#1 Преобразован template._id в template в категориях');
                callback(null);
            })
        })
    }

    function renameParamFields(callback) {
        //переименовать type в behavior
        db.collection('parameters').updateMany({}, {$rename: {'type': 'behavior'}}, err => {
            console.log('#2 Переименованы type в behavior в параметрах');
            callback(err)
        })
    }

    function updateParams(callback) {
        //обновляем параметры - id в параметрах
        let promises = [];
        db.collection('parameters').find().forEach(parameter => {
            parameter.url = translit(parameter.name);
            if (parameter.behavior == 'radiolist') parameter.behavior = 'checklist';

            if (parameter.values)
                parameter.values.forEach(val => {
                    val._id = ObjectId(val.id);
                    val.url = translit(val.value);
                    delete val.id;
                });
            let promise = new Promise((resolve, reject) => {
                api.parameter.update(parameter).exec(err => {
                    if (err) reject();
                    resolve()
                })
            });
            promises.push(promise);
        }, err => {
            if (err) callback(err);
            Promise.all(promises).then(err => {
                console.log('#3 Обновили values в параметрах');
                callback(null)
            });
        })
    }

    function renameTmplFields(callback) {
        //обновляем шаблоны - переименование поля
        db.collection('templates').updateMany({}, {$rename: {'parameters_id': 'parameters'}}, err => {
            console.log('#4 Переименованы parameters_id в parameters в шаблонах');
            callback(err)
        })
    }

    function updateTmpl(callback) {
        //обновляем шаблоны - переименование поля
        let promises = [];
        db.collection('templates').find().forEach((template) => {
                if (template.parameters) {
                    template.parameters.forEach((parameter, i) => {
                        template.parameters[i] = {parameter: ObjectId(parameter)}
                    })
                }
                let p = new Promise((resolve, reject) => {
                    api.template.update(template).exec(err => {
                        if (err) reject();
                        resolve()
                    })
                });
                promises.push(p);

            },
            err => {
                if (err) callback(err);
                Promise.all(promises).then(err => {
                    console.log('#5 Обновили parameter в шаблонах');
                    callback(null);
                })
            })
    }

    function updateProducts(callback) {
        //обновляем продукты - удалить категории, установить категорию и параметры (ид + селектед)
        let promises = [];
        db.collection('products').find().forEach(product => {
                if (product.categories && product.categories.length) {
                    product.category = product.categories[0]._id;
                }
                if (product.parameters && product.parameters.length) {
                    let newParams = [];
                    product.parameters.forEach(parameter => {
                        newParams.push({
                            parameter: parameter._id,
                            selected: parameter.selected
                        })
                    });
                    product.parameters = newParams;
                    // product.categories = [];
                }
                if (product.photos && product.photos.length) {
                    let newPhotos = [];
                    product.photos.forEach((photo) => {
                        newPhotos.push({
                            fileId: photo.fileId,
                            fileType: photo.type,
                            name: photo.name,
                            description: photo.description,
                            order: photo.order

                        })
                    });
                    product.photos = newPhotos;
                }

                let p = new Promise((resolve, reject) => {
                    api.product.update(product).exec(err => {
                        if (err) reject();
                        resolve();
                    })
                });
                promises.push(p);
            },
            err => {
                if (err) callback(err);
                Promise.all(promises).then((err) => {
                    console.log('#6 Обновили продукты categories, parameters, photos');
                    callback(null);
                });
            });


    }

    function clearProductCats(callback) {
        db.collection('products').updateMany({}, {$unset: {categories: ""}}, err => {
            console.log('#7 Удалены старые категории');
            callback(err);
        });
    }

    function renameSettingsFields(callback) {
        //переименование поля в settings
        db.collection('settings').updateMany({}, {$rename: {'seos': 'seoParams'}}, (err) => {
            console.log('#8 Переименование seoParams');
            callback(err);
        })
    }

    function updateSettings(callback) {
        //изменить структуру данных в соответствии с монгуз моделью
        db.collection('settings').find().limit(1).next((err, settings)=> {
            if (settings.seoParams) {
                let seos = settings.seoParams;
                for (let i = 0; i < seos.length; i++) {
                    seos[i].title = seos[i].params.title;
                    seos[i].description = seos[i].params.description;
                    seos[i].keywords = seos[i].params.keywords;
                    delete seos[i].params;
                }
            }
            api.settings.update(settings).exec((err) => {
                console.log('#8 Обновили структуру settings');
                callback(err)
            })
        })
    }

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
        }).then(callback);
        console.log('#9 Создали индекс для продуктов');
    }

    function createParamsFts(callback) {
        //создать полнотекстовый индекс для поиск параметров
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
        }).then(callback);
        console.log('#10 Создали индекс для параметров');
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
})
;

