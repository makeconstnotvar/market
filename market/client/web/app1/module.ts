import "rxjs/Rx";
import {APP_INITIALIZER, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {NavigationEnd, Router} from "@angular/router";
import {PagesModule} from "pages/module";
import {RootLayout,LayoutsModule} from "layouts/module";
import {CategoryProvider, ContractProvider, ParameterProvider, ProductProvider, SettingsProvider, SettingsFactory} from "providers";
import {ConfigService, GlobalService, NavbarService, ParametersService, SortingService} from "services";
import {SeoService} from "./services/seo1";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
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
        SeoService
    ],
    exports: [
        RootLayout
    ]
})
export class ApplicationModule {
    constructor(private router: Router,
                private globalService: GlobalService,
                private contractProvider: ContractProvider,
                private navbarService: NavbarService) {

        this.router.events
            .filter(e => e instanceof NavigationEnd)
            .pairwise()
            .subscribe(states => globalService.updateState(states));
        this.contractProvider.getCartStatus().subscribe(
            response => {
                this.navbarService.updateCartData(response)
            }
        )

    }
}