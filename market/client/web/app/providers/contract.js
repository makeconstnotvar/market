import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
var ContractProvider = (function () {
    function ContractProvider(http) {
        this.http = http;
    }
    ContractProvider.prototype.getById = function (id) {
        return this.http.post('/api/contract/select', { id: id });
    };
    ContractProvider.prototype.placeContract = function (item) {
        return this.http.post('/api/contract/place', item);
    };
    ContractProvider.prototype.postPosition = function (position) {
        return this.http.post('/api/contract/position', position);
    };
    ContractProvider.prototype.put = function (item) {
        return this.http.post('/api/contract/update', item);
    };
    ContractProvider.prototype.getCartStatus = function () {
        return this.http.post('/api/contract/status', {});
    };
    ContractProvider.prototype.getCart = function () {
        return this.http.post('/api/contract/cart', {});
    };
    ContractProvider.decorators = [
        { type: Injectable },
    ];
    ContractProvider.ctorParameters = function () { return [
        { type: HttpClient, },
    ]; };
    return ContractProvider;
}());
export { ContractProvider };
