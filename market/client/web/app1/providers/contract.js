"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContractProvider = /** @class */ (function () {
    function ContractProvider(http) {
        this.http = http;
    }
    ContractProvider.prototype.getById = function (id) {
        return this.http.post('/api/contract/select', { id: id })
            .map(function (r) {
            return r.json();
        });
    };
    ContractProvider.prototype.placeContract = function (item) {
        return this.http.post('/api/contract/place', item)
            .map(function (r) {
            return r.json();
        });
    };
    ContractProvider.prototype.postPosition = function (position) {
        return this.http.post('/api/contract/position', position)
            .map(function (r) {
            return r.json();
        });
    };
    ContractProvider.prototype.put = function (item) {
        return this.http.post('/api/contract/update', item)
            .map(function (r) {
            return r.json();
        });
    };
    ContractProvider.prototype.getCartStatus = function () {
        return this.http.post('/api/contract/status', {})
            .map(function (r) {
            return r.json();
        });
    };
    ContractProvider.prototype.getCart = function () {
        return this.http.post('/api/contract/cart', {})
            .map(function (r) {
            return r.json();
        });
    };
    ContractProvider = __decorate([
        core_1.Injectable()
    ], ContractProvider);
    return ContractProvider;
}());
exports.ContractProvider = ContractProvider;
