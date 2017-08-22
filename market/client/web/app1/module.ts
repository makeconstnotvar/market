import "rxjs/Rx";
import {NgModule, APP_INITIALIZER} from "@angular/core";
import {PagesModule} from "pages/module";
import {Layout} from "pages/layout/layout";
import {BrowserModule} from "@angular/platform-browser";
import {CategoryProvider} from "providers/category";
import {HttpModule} from "@angular/http";
import {ContractProvider} from "providers/contract";
import {ParameterProvider} from "providers/parameter";
import {ProductProvider} from "providers/product";
import {SettingsProvider} from "providers/settings";
import {FooterComponent} from "components/footer/footer";
import {NavbarService} from "services/navbar";
import {ConfigService} from "services/config";
import {Router, NavigationEnd} from "@angular/router";
import {GlobalService} from "services/global";
import {ParametersService} from "./services/parameters";
import {NavbarComponent} from "./components/navbar/navbar";
import {SortingService} from "./services/sort";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        PagesModule
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
    bootstrap: [
        Layout,
        NavbarComponent,
        FooterComponent
    ]
})
export class ModuleApplication {
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