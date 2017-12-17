import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ComponentSpecialsProduct} from "./product/product";
import {ComponentSpecialsSeo} from "./seo/seo";
import {ComponentSpecialsPromo} from "./promo/promo";
import {ComponentSpecialsProducts} from "./products/products";
import {ComponentSpecialsWelcome} from "./welcome/welcome";
import {RouterModule} from "@angular/router";
import {ControlsModule} from "controls/module";

@NgModule({
    declarations: [
        ComponentSpecialsProduct,
        ComponentSpecialsProducts,
        ComponentSpecialsPromo,
        ComponentSpecialsSeo,
        ComponentSpecialsWelcome
    ],
    imports: [
        BrowserModule,
        RouterModule,
        ControlsModule
    ],
    exports: [
        ComponentSpecialsProduct,
        ComponentSpecialsProducts,
        ComponentSpecialsPromo,
        ComponentSpecialsSeo,
        ComponentSpecialsWelcome
    ]
})
class ModuleComponentsSpecials {

}

export {
    ModuleComponentsSpecials,
    ComponentSpecialsProduct,
    ComponentSpecialsProducts,
    ComponentSpecialsPromo,
    ComponentSpecialsSeo,
    ComponentSpecialsWelcome
}
