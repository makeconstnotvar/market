"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/Rx");
var core_1 = require("@angular/core");
var module_1 = require("pages/module");
var module_2 = require("layouts/module");
var platform_browser_1 = require("@angular/platform-browser");
var providers_1 = require("providers");
var http_1 = require("@angular/http");
var providers_2 = require("providers");
var providers_3 = require("providers");
var providers_4 = require("providers");
var providers_5 = require("providers");
var navbar_1 = require("services/navbar");
var config_1 = require("services/config");
var router_1 = require("@angular/router");
var global_1 = require("services/global");
var parameters_1 = require("./services/parameters");
var sort_1 = require("./services/sort");
var module_3 = require("./layouts/module");
var ApplicationModule = /** @class */ (function () {
    function ApplicationModule(router, globalService, contractProvider, navbarService) {
        var _this = this;
        this.router = router;
        this.globalService = globalService;
        this.contractProvider = contractProvider;
        this.navbarService = navbarService;
        this.router.events
            .filter(function (e) { return e instanceof router_1.NavigationEnd; })
            .pairwise()
            .subscribe(function (states) { return globalService.updateState(states); });
        this.contractProvider.getCartStatus().subscribe(function (response) {
            _this.navbarService.updateCartData(response);
        });
    }
    ApplicationModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                module_1.PagesModule,
                module_3.LayoutsModule
            ],
            providers: [
                providers_5.SettingsProvider,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: function (settingsProvider) { return function () { return settingsProvider.config(); }; },
                    deps: [providers_5.SettingsProvider],
                    multi: true
                },
                providers_1.CategoryProvider,
                providers_2.ContractProvider,
                providers_3.ParameterProvider,
                providers_4.ProductProvider,
                navbar_1.NavbarService,
                config_1.ConfigService,
                global_1.GlobalService,
                parameters_1.ParametersService,
                sort_1.SortingService,
                {
                    provide: 'Window', useValue: window
                }
            ],
            exports: [
                module_2.RootLayout
            ]
        })
    ], ApplicationModule);
    return ApplicationModule;
}());
exports.ApplicationModule = ApplicationModule;
