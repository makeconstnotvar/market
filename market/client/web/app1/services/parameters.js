"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ParametersService = /** @class */ (function () {
    function ParametersService() {
        if (!this.filterData)
            this.filterData = new Map();
    }
    ParametersService.prototype.getFilterData = function () {
        return this.getUrlObject();
    };
    ParametersService.prototype.clearFilterData = function () {
        this.filterData = new Map();
    };
    ParametersService.prototype.filterToUrl = function (parameter) {
        switch (parameter.behavior) {
            case 'checklist':
            case 'radiolist':
                this.filterToUrlChecboxlist(parameter);
                break;
            case 'onecheck':
                this.filterToUrlOnecheck(parameter);
                break;
            case 'input':
                this.filterToUrlInput(parameter);
                break;
            default:
                throw Error('Неизвестный тип параметра фильтра');
        }
        return this.getUrlObject();
    };
    ParametersService.prototype.filterToUrlChecboxlist = function (parameter) {
        var valuesSelected = parameter.values.filter(function (v) { return v.selected; });
        if (valuesSelected.length) {
            var valuesFiltered = valuesSelected.map(function (v) { return v.url; });
            var fake = {};
            fake[parameter.url] = valuesFiltered;
            this.filterData.set(parameter._id, fake);
        }
        else {
            this.filterData.delete(parameter._id);
        }
        return this.filterData;
    };
    ParametersService.prototype.filterToUrlOnecheck = function (parameter) {
        var valuesSelected = parameter.values[0].selected;
        var fake = {};
        fake[parameter.url] = valuesSelected ? parameter.values[0].url : 'net';
        this.filterData.set(parameter._id, fake);
    };
    ParametersService.prototype.filterToUrlInput = function (parameter) {
        var valuesSelected = !!parameter.from || !!parameter.to;
        if (valuesSelected) {
            var fake = {};
            var queryValues = [];
            if (parameter.from)
                queryValues.push("from_" + parameter.from);
            if (parameter.to)
                queryValues.push("to_" + parameter.to);
            if (queryValues.length)
                fake[parameter.url] = queryValues;
            this.filterData.set(parameter._id, fake);
        }
        else {
            this.filterData.delete(parameter._id);
        }
    };
    ParametersService.prototype.getUrlObject = function () {
        var values = this.filterData.values();
        var valuesArray = Array.from(values);
        return valuesArray.length ? Object.assign.apply(Object, [{}].concat(valuesArray)) : {};
    };
    ParametersService.prototype.urlToParameter = function (parameter, queryParams) {
        switch (parameter.behavior) {
            case 'checklist':
            case 'radiolist':
            case 'onecheck':
                return this.urlToFilterChecboxlist(parameter, queryParams);
            case 'input':
                return this.urlToFilterInput(parameter, queryParams);
            default:
                throw Error('Неизвестный тип параметра фильтра');
        }
    };
    ParametersService.prototype.urlToFilterChecboxlist = function (parameter, queryParams) {
        var _loop_1 = function (prop) {
            if (parameter.url == prop) {
                parameter.values.forEach(function (v) {
                    if (Array.isArray(queryParams[prop]))
                        v.selected = queryParams[prop].includes(v.url);
                    else
                        v.selected = queryParams[prop] == v.url;
                });
                this_1.filterToUrl(parameter);
            }
        };
        var this_1 = this;
        for (var prop in queryParams) {
            _loop_1(prop);
        }
        return parameter;
    };
    ParametersService.prototype.urlToFilterInput = function (parameter, queryParams) {
        for (var prop in queryParams) {
            if (parameter.url == prop) {
                var fromRegexp = new RegExp(/from_(\d+)/), toRegexp = new RegExp(/to_(\d+)/), from = fromRegexp.exec(queryParams[prop]), to = toRegexp.exec(queryParams[prop]);
                if (from)
                    parameter.from = from[1];
                if (to)
                    parameter.to = to[1];
                this.filterToUrl(parameter);
            }
        }
        return parameter;
    };
    ParametersService = __decorate([
        core_1.Injectable()
    ], ParametersService);
    return ParametersService;
}());
exports.ParametersService = ParametersService;
