import { NgModule } from "@angular/core";
import { ComponentCatalogSorting } from "./sorting/sorting";
import { ComponentCatalogFilter } from "./filter/filter";
import { ComponentCatalogProduct } from "./product/product";
import { ComponentCatalogAlert } from "./alert/alert";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ControlsModule } from "controls/module";
import { FormsModule } from "@angular/forms";
import { ComponentFilterButtons } from "./filter/buttons/buttons";
import { ComponentFilterCheckbox } from "./filter/checkbox/checkbox";
import { ComponentFilterCheckboxlist } from "./filter/checkboxlist/checkboxlist";
import { ComponentFilterRadiolist } from "./filter/radiolist/radiolist";
import { ComponentFilterInputs } from "./filter/inputs/inputs";
class ModuleComponentsCatalog {
}
ModuleComponentsCatalog.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ComponentCatalogSorting,
                    ComponentCatalogFilter,
                    ComponentCatalogProduct,
                    ComponentCatalogAlert,
                    ComponentFilterButtons,
                    ComponentFilterCheckbox,
                    ComponentFilterCheckboxlist,
                    ComponentFilterRadiolist,
                    ComponentFilterInputs
                ],
                imports: [
                    BrowserModule,
                    RouterModule,
                    FormsModule,
                    ControlsModule
                ],
                exports: [
                    ComponentCatalogSorting,
                    ComponentCatalogFilter,
                    ComponentCatalogProduct,
                    ComponentCatalogAlert,
                    ComponentFilterButtons,
                    ComponentFilterCheckbox,
                    ComponentFilterCheckboxlist,
                    ComponentFilterRadiolist,
                    ComponentFilterInputs
                ]
            },] },
];
ModuleComponentsCatalog.ctorParameters = () => [];
export { ModuleComponentsCatalog, ComponentCatalogSorting, ComponentCatalogFilter, ComponentCatalogProduct, ComponentCatalogAlert, ComponentFilterButtons, ComponentFilterCheckbox, ComponentFilterCheckboxlist, ComponentFilterRadiolist, ComponentFilterInputs };
//# sourceMappingURL=module.js.map