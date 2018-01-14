import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
var CategoryProvider = (function () {
    function CategoryProvider(http) {
        this.http = http;
    }
    CategoryProvider.prototype.getTree = function () {
        return this.http.post('/api/category/list', {});
    };
    CategoryProvider.decorators = [
        { type: Injectable },
    ];
    CategoryProvider.ctorParameters = function () { return [
        { type: HttpClient, },
    ]; };
    return CategoryProvider;
}());
export { CategoryProvider };
