import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST } from "@nguniversal/express-engine/tokens";
export class UniversalInterceptor {
    constructor(serverUrl, request) {
        this.serverUrl = serverUrl;
        this.request = request;
    }
    intercept(req, next) {
        const serverReq = !this.serverUrl ? req : req.clone({
            url: `${this.serverUrl}${req.url}`,
        });
        serverReq.headers['uid'] = this.request['uid'];
        serverReq.headers['test'] = 111;
        return next.handle(serverReq);
    }
}
UniversalInterceptor.decorators = [
    { type: Injectable },
];
UniversalInterceptor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['serverUrl',] },] },
    { type: undefined, decorators: [{ type: Inject, args: [REQUEST,] },] },
];
//# sourceMappingURL=universal.js.map