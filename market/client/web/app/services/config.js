import { Injectable } from "@angular/core";
var ConfigService = (function () {
    function ConfigService() {
    }
    Object.defineProperty(ConfigService.prototype, "config", {
        get: function () {
            return Object.assign({}, this._config);
        },
        set: function (newConfig) {
            this._config = newConfig;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    ConfigService.decorators = [
        { type: Injectable },
    ];
    ConfigService.ctorParameters = function () { return []; };
    return ConfigService;
}());
export { ConfigService };
