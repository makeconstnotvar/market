import {NgModule} from "@angular/core";
import {FooterComponent} from "./footer/footer";
import {JumbotronComponent} from "./jumbotron/jumbotron";
import {JumboComponent} from "./jumbotron/components/jumbo";
import {MapsComponent} from "./maps/maps";
import {MenuComponent} from "./menu/menu";
import {PriceComponent} from "./price/price";
import {ProgressComponent} from "./progress/progress";
import {PagerComponent} from "./pager/pager";
import {NavbarComponent} from "./navbar/navbar";
import {NavbarItemComponent} from "./navbar/components/navbar-item/navbar-item";
import {NavbarCartComponent} from "./navbar/components/navbar-cart/navbar-cart";
import {NavbarBrandComponent} from "./navbar/components/navbar-brand/navbar-brand";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
@NgModule({
    declarations: [
        FooterComponent,
        JumbotronComponent,
        JumboComponent,
        MapsComponent,
        MenuComponent,
        NavbarComponent,
        NavbarItemComponent,
        NavbarCartComponent,
        NavbarBrandComponent,
        PagerComponent,
        ProgressComponent,
        PriceComponent
    ],
    imports: [
         BrowserModule,
          RouterModule
    ],
    providers: [],
    exports: [
        FooterComponent,
        JumboComponent,JumbotronComponent,
        MapsComponent,
        MenuComponent,
        NavbarComponent,
        PagerComponent,
        ProgressComponent,
        PriceComponent
    ]
})
export class ModuleComponents {

}
/*
export {
    FooterComponent,
    JumboComponent,
    MapsComponent,
    MenuComponent,
    NavbarComponent,
    PagerComponent,
    ProgressComponent,
    PriceComponent
}*/