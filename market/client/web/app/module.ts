import "rxjs/Rx";
import {APP_INITIALIZER, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NavigationEnd, Router} from "@angular/router";
import {PagesModule} from "pages/module";
import {LayoutsModule, RootLayout} from "layouts/module";
import {CategoryProvider, ContractProvider, ParameterProvider, ProductProvider, SettingsFactory, SettingsProvider} from "./providers";
import {ConfigService, GlobalService, NavbarService, ParametersService, RequestInterceptor, SeoService, ServerResponseService1, SortingService} from "./services";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";


@NgModule({
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
            useFactory: SettingsFactory,
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
})
export class ApplicationModule {
    constructor(private router: Router,
                private globalService: GlobalService) {

        this.router.events
            .filter(e => e instanceof NavigationEnd)
            .pairwise()
            .subscribe(states => globalService.updateState(states));


    }
}