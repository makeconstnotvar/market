import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
var ParameterProvider = (function () {
    function ParameterProvider(http) {
        this.http = http;
    }
    ParameterProvider.prototype.getList = function (catUrl) {
        return this.http
            .post('/api/parameters/list', { catUrl: catUrl });
    };
    ParameterProvider.prototype.getActive = function (query) {
        return this.http
            .post('/api/parameters/active', query);
    };
    ParameterProvider.decorators = [
        { type: Injectable },
    ];
    ParameterProvider.ctorParameters = function () { return [
        { type: HttpClient, },
    ]; };
    return ParameterProvider;
}());
export { ParameterProvider };
