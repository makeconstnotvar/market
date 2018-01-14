import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST } from "@nguniversal/express-engine/tokens";
var UniversalInterceptor = (function () {
    function UniversalInterceptor(serverUrl, request) {
        this.serverUrl = serverUrl;
        this.request = request;
    }
    UniversalInterceptor.prototype.intercept = function (req, next) {
        var serverReq = !this.serverUrl ? req : req.clone({
            url: "" + this.serverUrl + req.url,
        });
        return next.handle(serverReq);
    };
    UniversalInterceptor.decorators = [
        { type: Injectable },
    ];
    UniversalInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['serverUrl',] },] },
        { type: undefined, decorators: [{ type: Inject, args: [REQUEST,] },] },
    ]; };
    return UniversalInterceptor;
}());
export { UniversalInterceptor };
