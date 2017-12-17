import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
export class ParameterProvider {
    constructor(http) {
        this.http = http;
    }
    getList(catUrl) {
        return this.http
            .post('/api/parameters/list', { catUrl: catUrl });
    }
    getActive(query) {
        return this.http
            .post('/api/parameters/active', query);
    }
}
ParameterProvider.decorators = [
    { type: Injectable },
];
ParameterProvider.ctorParameters = () => [
    { type: HttpClient, },
];
//# sourceMappingURL=parameter.js.map