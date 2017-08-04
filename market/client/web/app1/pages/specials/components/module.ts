import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ComponentSpecialsProduct} from "./product";
import {ComponentSpecialsSeo} from "./seo";
import {ComponentSpecialsPromo} from "./promo";
import {ComponentSpecialsProducts} from "./products";
import {ComponentSpecialsWelcome} from "./welcome";
import {RouterModule} from "@angular/router";
import {ModuleComponents} from "components/module";

@NgModule({
    declarations: [
        ComponentSpecialsProduct,
        ComponentSpecialsProducts,
        ComponentSpecialsPromo,
        ComponentSpecialsSeo,
        ComponentSpecialsWelcome
    ],
    imports: [BrowserModule, RouterModule,ModuleComponents],
    providers: [],
    exports: [
        ComponentSpecialsProduct,
        ComponentSpecialsProducts,
        ComponentSpecialsPromo,
        ComponentSpecialsSeo,
        ComponentSpecialsWelcome
    ]
})
export class ModuleComponentsSpecials {

}
