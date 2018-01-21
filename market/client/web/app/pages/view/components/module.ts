import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ComponentViewSimilar} from "./similar/similar";
import {ComponentViewSocials} from "./socials/socials";


@NgModule({
    declarations: [
        ComponentViewSimilar,
        ComponentViewSocials
    ],
    imports: [BrowserModule, RouterModule],
    providers: [],
    exports: [
        ComponentViewSimilar,
        ComponentViewSocials,
    ]
})
class ModuleComponentsView {

}

export {
    ModuleComponentsView,
    ComponentViewSimilar,
    ComponentViewSocials,
}