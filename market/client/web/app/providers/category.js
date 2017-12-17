import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
export class CategoryProvider {
    constructor(http) {
        this.http = http;
    }
    getTree() {
        return this.http.post('/api/category/list', {});
    }
}
CategoryProvider.decorators = [
    { type: Injectable },
];
CategoryProvider.ctorParameters = () => [
    { type: HttpClient, },
];
//# sourceMappingURL=category.js.map