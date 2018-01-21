import "rxjs/Rx";
import {APP_INITIALIZER, NgModule, Pipe, Sanitizer, SecurityContext} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {PagesModule} from "pages/module";
import {LayoutsModule, RootLayout} from "layouts/module";
import {CategoryProvider, ContractProvider, ParameterProvider, ProductProvider, SettingsFactory, SettingsProvider} from "./providers";
import {ConfigService, GlobalService, NavbarService, ParametersService, PlatformService, RequestInterceptor, SeoService, ServerResponseService, SortingService, StateService} from "./services";
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
})
export class ApplicationModule {
    constructor(router: Router,
                globalService: GlobalService,
                stateService: StateService,
                platformService: PlatformService) {

        router.events
            .filter(e => e instanceof NavigationEnd)
            .pairwise()
            .subscribe(states => globalService.updateState(states));

        router.events
            .filter(e => (e instanceof NavigationStart || e instanceof NavigationEnd))
            .subscribe(state => {
                stateService.save(state.constructor.name, state)
            });

    }
}

