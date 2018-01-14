import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "../services";
var SettingsProvider = (function () {
    function SettingsProvider(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    SettingsProvider.prototype.config = function () {
        var _this = this;
        return this.http.post('/api/settings/config', {})
            .map(function (config) {
            _this.configService.config = config;
            return config;
        }).toPromise();
    };
    SettingsProvider.prototype.meta = function (state) {
        return this.http.post('/api/settings/meta', { state: state });
    };
    SettingsProvider.decorators = [
        { type: Injectable },
    ];
    SettingsProvider.ctorParameters = function () { return [
        { type: HttpClient, },
        { type: ConfigService, },
    ]; };
    return SettingsProvider;
}());
function SettingsFactory(settings) {
    return function () { return settings.config(); };
}
export { SettingsProvider, SettingsFactory };
