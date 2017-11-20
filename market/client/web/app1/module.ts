import "rxjs/Rx";
import {APP_INITIALIZER, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NavigationEnd, Router} from "@angular/router";
import {PagesModule} from "pages/module";
import {RootLayout,LayoutsModule} from "layouts/module";
import {CategoryProvider, ContractProvider, ParameterProvider, ProductProvider, SettingsProvider, SettingsFactory} from "providers/index";
import {ConfigService, GlobalService, NavbarService, ParametersService, SortingService} from "services/index";
import {SeoService} from "services/index";
import { HttpClientModule} from "@angular/common/http";


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