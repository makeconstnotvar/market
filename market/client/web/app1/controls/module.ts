import {NgModule} from "@angular/core";
import {FooterControl} from "./footer/footer";
import {JumbotronControl} from "./jumbotron/jumbotron";
import {JumboComponent} from "./jumbotron/components/jumbo";
import {MapsControl} from "./maps/maps";
import {MenuControl} from "./menu/menu";
import {PriceControl} from "./price/price";
import {ProgressControl} from "./progress/progress";
import {PagerControl} from "./pager/pager";
import {NavbarControl} from "./navbar/navbar";
import {NavbarItemComponent} from "./navbar/components/navbar-item/navbar-item";
import {NavbarCartComponent} from "./navbar/components/navbar-cart/navbar-cart";
import {NavbarBrandComponent} from "./navbar/components/navbar-brand/navbar-brand";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [
        FooterControl,
        JumbotronControl,
        JumboComponent,
        MapsControl,
        MenuControl,
        NavbarControl,
        NavbarItemComponent,
        NavbarCartComponent,
        NavbarBrandComponent,
        PagerControl,
        ProgressControl,
        PriceControl
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    providers: [],
    exports: [
        FooterControl,
        JumbotronControl,
        MapsControl,
        MenuControl,
        NavbarControl,
        PagerControl,
        ProgressControl,
        PriceControl
    ]
})
class ControlsModule {}

export {
    ControlsModule,
    FooterControl,
    JumboComponent,
    JumbotronControl,
    MapsControl,
    MenuControl,
    NavbarControl,
    PagerControl,
    ProgressControl,
    PriceControl
}