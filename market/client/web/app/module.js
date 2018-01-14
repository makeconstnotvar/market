import "rxjs/Rx";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { PagesModule } from "pages/module";
import { LayoutsModule, RootLayout } from "layouts/module";
import { CategoryProvider, ContractProvider, ParameterProvider, ProductProvider, SettingsFactory, SettingsProvider } from "./providers";
import { ConfigService, GlobalService, NavbarService, ParametersService, PlatformService, RequestInterceptor, SeoService, ServerResponseService, SortingService, StateService } from "./services";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
var ɵ0 = SettingsFactory;
var ApplicationModule = (function () {
    function ApplicationModule(router, globalService, stateService, platformService) {
        router.events
            .filter(function (e) { return e instanceof NavigationEnd; })
            .pairwise()
            .subscribe(function (states) { return globalService.updateState(states); });
        router.events
            .filter(function (e) { return (e instanceof NavigationStart || e instanceof NavigationEnd); })
            .subscribe(function (state) {
            stateService.save(state.constructor.name, state);
        });
    }
    ApplicationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        HttpClientModule,
                        PagesModule,
                        LayoutsModule
                    ],
                    providers: [
                        SettingsProvider,
                        {
                            provide: APP_INITIALIZER,
                            useFactory: ɵ0,
                            deps: [SettingsProvider],
                            multi: true
                        },
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: RequestInterceptor,
                            multi: true,
                        },
                        CategoryProvider,
                        ContractProvider,
                        ParameterProvider,
                        ProductProvider,
                        NavbarService,
                        ConfigService,
                        GlobalService,
                        ParametersService,
                        SortingService,
                        SeoService,
                        ServerResponseService,
                        StateService,
                        PlatformService
                    ],
                    exports: [
                        RootLayout
                    ]
                },] },
    ];
    ApplicationModule.ctorParameters = function () { return [
        { type: Router, },
        { type: GlobalService, },
        { type: StateService, },
        { type: PlatformService, },
    ]; };
    return ApplicationModule;
}());
export { ApplicationModule };
export { ɵ0 };
