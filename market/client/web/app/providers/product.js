import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
var ProductProvider = (function () {
    function ProductProvider(http) {
        this.http = http;
    }
    ProductProvider.prototype.list = function (query) {
        return this.http.post('/api/product/list', query);
    };
    ProductProvider.prototype.view = function (id) {
        return this.http.post('/api/product/view', { id: id });
    };
    ProductProvider.prototype.special = function () {
        return this.http.post('/api/product/special', {});
    };
    ProductProvider.decorators = [
        { type: Injectable },
    ];
    ProductProvider.ctorParameters = function () { return [
        { type: HttpClient, },
    ]; };
    return ProductProvider;
}());
export { ProductProvider };
