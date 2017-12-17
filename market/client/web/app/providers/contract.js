import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
export class ContractProvider {
    constructor(http) {
        this.http = http;
    }
    getById(id) {
        return this.http.post('/api/contract/select', { id: id });
    }
    placeContract(item) {
        return this.http.post('/api/contract/place', item);
    }
    postPosition(position) {
        return this.http.post('/api/contract/position', position);
    }
    put(item) {
        return this.http.post('/api/contract/update', item);
    }
    getCartStatus() {
        return this.http.post('/api/contract/status', {});
    }
    getCart() {
        return this.http.post('/api/contract/cart', {});
    }
}
ContractProvider.decorators = [
    { type: Injectable },
];
ContractProvider.ctorParameters = () => [
    { type: HttpClient, },
];
//# sourceMappingURL=contract.js.map