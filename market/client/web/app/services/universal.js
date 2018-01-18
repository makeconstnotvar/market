import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST, RESPONSE } from "@nguniversal/express-engine/tokens";
var UniversalInterceptor = (function () {
    function UniversalInterceptor(serverUrl, request, response) {
        this.serverUrl = serverUrl;
        this.request = request;
        this.response = response;
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
        { type: undefined, decorators: [{ type: Inject, args: [RESPONSE,] },] },
    ]; };
    return UniversalInterceptor;
}());
export { UniversalInterceptor };
