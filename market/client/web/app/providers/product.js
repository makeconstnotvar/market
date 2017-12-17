import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
export class ProductProvider {
    constructor(http) {
        this.http = http;
    }
    list(query) {
        return this.http.post('/api/product/list', query);
    }
    view(id) {
        return this.http.post('/api/product/view', { id: id });
    }
    special() {
        return this.http.post('/api/product/special', {});
    }
}
ProductProvider.decorators = [
    { type: Injectable },
];
ProductProvider.ctorParameters = () => [
    { type: HttpClient, },
];
//# sourceMappingURL=product.js.map