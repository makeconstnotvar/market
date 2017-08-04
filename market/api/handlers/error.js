'use strict';

module.exports = class {
    notAuth(err, req, res, next){
        if (res.statusCode == 400 || res.statusCode == 401)
            err.userMessage = 'Ошибка авторизации';
        next(err);
    }
};