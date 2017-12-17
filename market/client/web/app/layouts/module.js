import { NgModule } from "@angular/core";
import { RootLayout } from "./root";
import { DefaultLayout } from "./default";
import { RouterModule } from "@angular/router";
import { ControlsModule } from "controls/module";
class LayoutsModule {
}
LayoutsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    RootLayout,
                    DefaultLayout
                ],
                imports: [
                    RouterModule,
                    ControlsModule
                ],
                exports: [
                    RootLayout,
                    DefaultLayout
                ]
            },] },
];
LayoutsModule.ctorParameters = () => [];
export { LayoutsModule, RootLayout, DefaultLayout };
//# sourceMappingURL=module.js.map