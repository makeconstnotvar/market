import "rxjs/Rx";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NavigationEnd, Router } from "@angular/router";
import { PagesModule } from "pages/module";
import { LayoutsModule, RootLayout } from "layouts/module";
import { CategoryProvider, ContractProvider, ParameterProvider, ProductProvider, SettingsFactory, SettingsProvider } from "./providers";
import { ConfigService, GlobalService, NavbarService, ParametersService, RequestInterceptor, SeoService, ServerResponseService1, SortingService } from "./services";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
var ɵ0 = SettingsFactory;
var ApplicationModule = (function () {
    function ApplicationModule(router, globalService) {
        this.router = router;
        this.globalService = globalService;
        this.router.events
            .filter(function (e) { return e instanceof NavigationEnd; })
            .pairwise()
            .subscribe(function (states) { return globalService.updateState(states); });
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
                        ServerResponseService1,
                    ],
                    exports: [
                        RootLayout
                    ]
                },] },
    ];
    ApplicationModule.ctorParameters = function () { return [
        { type: Router, },
        { type: GlobalService, },
    ]; };
    return ApplicationModule;
}());
export { ApplicationModule };
export { ɵ0 };
