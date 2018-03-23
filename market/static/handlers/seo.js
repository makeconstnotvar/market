const metas = require('../../metas');
module.exports = function (state) {
    return metas[state] || {
        "title": "Страница не найдена",
        "description": "",
        "image": ""
    };
};