import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "../services";
class SettingsProvider {
    constructor(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    config() {
        return this.http.post('/api/settings/config', {})
            .map((config) => {
            this.configService.config = config;
            return config;
        }).toPromise();
    }
    meta(state) {
        return this.http.post('/api/settings/meta', { state });
    }
}
SettingsProvider.decorators = [
    { type: Injectable },
];
SettingsProvider.ctorParameters = () => [
    { type: HttpClient, },
    { type: ConfigService, },
];
function SettingsFactory(settings) {
    return () => settings.config();
}
export { SettingsProvider, SettingsFactory };
//# sourceMappingURL=settings.js.map