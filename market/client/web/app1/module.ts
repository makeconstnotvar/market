import "rxjs/Rx";
import {NgModule, APP_INITIALIZER} from "@angular/core";
import {PagesModule} from "pages/module";
import {RootLayout} from "layouts/module";
import {BrowserModule} from "@angular/platform-browser";
import {CategoryProvider} from "providers";
import {HttpModule} from "@angular/http";
import {ContractProvider} from "providers";
import {ParameterProvider} from "providers";
import {ProductProvider} from "providers";
import {SettingsProvider} from "providers";
import {NavbarService} from "services/navbar";
import {ConfigService} from "services/config";
import {Router, NavigationEnd} from "@angular/router";
import {GlobalService} from "services/global";
import {ParametersService} from "./services/parameters";
import {SortingService} from "./services/sort";
import {LayoutsModule} from "./layouts/module";


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
            useFactory: (settingsProvider: SettingsProvider) => () => settingsProvider.config(),
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
        {
            provide: 'Window', useValue: window
        }
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