import "rxjs/Rx";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NavigationEnd, Router } from "@angular/router";
import { PagesModule } from "pages/module";
import { RootLayout, LayoutsModule } from "layouts/module";
import { CategoryProvider, ContractProvider, ParameterProvider, ProductProvider, SettingsProvider, SettingsFactory } from "providers/index";
import { ConfigService, GlobalService, NavbarService, ParametersService, SortingService } from "services/index";
import { SeoService } from "services/index";
import { HttpClientModule } from "@angular/common/http";
const ɵ0 = SettingsFactory;
export class ApplicationModule {
    constructor(router, globalService) {
        this.router = router;
        this.globalService = globalService;
        this.router.events
            .filter(e => e instanceof NavigationEnd)
            .pairwise()
            .subscribe(states => globalService.updateState(states));
    }
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
                    CategoryProvider,
                    ContractProvider,
                    ParameterProvider,
                    ProductProvider,
                    NavbarService,
                    ConfigService,
                    GlobalService,
                    ParametersService,
                    SortingService,
                    SeoService
                ],
                exports: [
                    RootLayout
                ]
            },] },
];
ApplicationModule.ctorParameters = () => [
    { type: Router, },
    { type: GlobalService, },
];
export { ɵ0 };
//# sourceMappingURL=module.js.map