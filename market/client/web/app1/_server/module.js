"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var module_1 = require("../module");
var platform_browser_1 = require("@angular/platform-browser");
var module_2 = require("layouts/module");
var animations_1 = require("@angular/platform-browser/animations");
var ServerAppModule = /** @class */ (function () {
    function ServerAppModule() {
    }
    ServerAppModule = __decorate([
        core_1.NgModule({
            bootstrap: [module_2.RootLayout],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({
                    appId: 'BD484954-6626-4699-86BD-AF9CA21F0DE8'
                }),
                platform_server_1.ServerModule,
                animations_1.NoopAnimationsModule,
                module_1.ApplicationModule
            ],
        })
    ], ServerAppModule);
    return ServerAppModule;
}());
exports.ServerAppModule = ServerAppModule;
