import { ControlsModule } from "controls/module";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ComponentCartPositions } from "./positions/positions";
import { ComponentCartHistory } from "./history/history";
import { ComponentCartContact } from "./contact/contact";
import { FormsModule } from "@angular/forms";
export class ModuleComponentsCart {
}
ModuleComponentsCart.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ComponentCartPositions,
                    ComponentCartHistory,
                    ComponentCartContact
                ],
                imports: [
                    BrowserModule,
                    RouterModule,
                    FormsModule,
                    ControlsModule
                ],
                providers: [],
                exports: [
                    ComponentCartPositions,
                    ComponentCartHistory,
                    ComponentCartContact
                ]
            },] },
];
ModuleComponentsCart.ctorParameters = () => [];
//# sourceMappingURL=module.js.map