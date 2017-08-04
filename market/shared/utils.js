if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str) {
        return str.length > 0 && this.substring(0, str.length) === str;
    }
}
if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (str) {
        return str.length > 0 && this.substring(this.length - str.length, this.length) === str;
    }
}
if (typeof Array.prototype.contains != 'function') {
    Array.prototype.contains = function (obj) {
        var i = this.length;
        while (i--) {
            if (this[i] === obj) {
                return true;
            }
        }
        return false;
    }
}
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback/*, initialValue*/) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this), len = t.length >>> 0, k = 0, value;
        if (arguments.length == 2) {
            value = arguments[1];
        } else {
            while (k < len && !k in t) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
        }
        for (; k < len; k++) {
            if (k in t) {
                value = callback(value, t[k], k, t);
            }
        }
        return value;
    };
}
if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this === null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}
if (!Array.prototype.addUniqueParam) {
    Array.prototype.addUniqueParam = function (parameter, field) {
        if (this === null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if(typeof parameter == 'function')
            throw new TypeError('Добавляемая в массив сущность не может быть функцией, только объект или примитив');
        if (typeof parameter == 'object') {
            field = field || '_id';
            var exist = this.find(function (item) {
                if (!parameter[field]) {
                    throw new TypeError('Поле "'+field+'" не существует у добавляемого объекта');
                }
                return item[field] == parameter[field];
            });
            if (!exist)
                this.push(parameter);
        }
        else{
            var exist = this.find(function (item) {
                return item == parameter;
            });
            if (!exist)
                this.push(parameter);
        }


        return this;
    };
}
