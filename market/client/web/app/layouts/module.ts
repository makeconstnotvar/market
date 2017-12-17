import {NgModule} from "@angular/core";
import {RootLayout} from "./root";
import {DefaultLayout} from "./default";
import {RouterModule} from "@angular/router";
import {ControlsModule} from "controls/module";

@NgModule({
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
})
class LayoutsModule {
}

export {
    LayoutsModule,
    RootLayout,
    DefaultLayout
}