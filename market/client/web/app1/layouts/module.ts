import {NgModule} from "@angular/core";
import {RootLayout} from "./root";
import {DefaultLayout} from "./default";

@NgModule({
    declarations: [
        RootLayout,
        DefaultLayout
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