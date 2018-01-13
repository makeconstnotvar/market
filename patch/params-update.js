var mongoose = require('mongoose'),
    bll = require('../market/api/business'),
    config = require('../market/config'),
    baseName = config.system.baseName;

//входит в состав patch-to-mongoose
mongoose.connect('mongodb://127.0.0.1:27017/' + baseName);

bll.template.selectAll({take: 0}).lean().exec((err, templates)=> {
    var promises = [];
    if (templates)
        templates.forEach(template => {
            var newParameters = [];

            if (template.parameters)
                template.parameters.forEach(parameterId=> {
                    newParameters.push({parameter: parameterId})
                });
            template.parameters = Array.prototype.slice.call(newParameters);
            var promise = bll.template.update(template).exec(err=> {
                promise.resolve();
            });

            promises.push(promise);

        });

    Promise.all(promises).then((err)=> {
        //db.close();
        console.log('all updated');
        process.exit(0);
    })
});



