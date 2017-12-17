import { Injectable } from "@angular/core";
export class ConfigService {
    set config(newConfig) {
        this._config = newConfig;
    }
    ;
    get config() {
        return Object.assign({}, this._config);
    }
    ;
}
ConfigService.decorators = [
    { type: Injectable },
];
ConfigService.ctorParameters = () => [];
//# sourceMappingURL=config.js.map