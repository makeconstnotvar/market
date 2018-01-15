import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentSpecialsProduct } from "./product/product";
import { ComponentSpecialsSeo } from "./seo/seo";
import { ComponentSpecialsPromo } from "./promo/promo";
import { ComponentSpecialsProducts } from "./products/products";
import { ComponentSpecialsWelcome } from "./welcome/welcome";
import { RouterModule } from "@angular/router";
import { ControlsModule } from "controls/module";
var ModuleComponentsSpecials = (function () {
    function ModuleComponentsSpecials() {
    }
    ModuleComponentsSpecials.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    ModuleComponentsSpecials.ctorParameters = function () { return []; };
    return ModuleComponentsSpecials;
}());
export { ModuleComponentsSpecials, ComponentSpecialsProduct, ComponentSpecialsProducts, ComponentSpecialsPromo, ComponentSpecialsSeo, ComponentSpecialsWelcome };
