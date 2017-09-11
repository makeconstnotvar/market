"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    SettingsProvider.prototype.config = function () {
        var _this = this;
        return this.http.post('/api/settings/config', {})
            .map(function (r) {
            var config = r.json();
            _this.configService.config = config;
            return config;
        }).toPromise();
    };
    SettingsProvider.prototype.meta = function (item) {
        return this.http.post('/api/settings/meta', { state: item.state, url: item.url })
            .map(function (r) {
            return r.json();
        });
    };
    SettingsProvider = __decorate([
        core_1.Injectable()
    ], SettingsProvider);
    return SettingsProvider;
}());
exports.SettingsProvider = SettingsProvider;
