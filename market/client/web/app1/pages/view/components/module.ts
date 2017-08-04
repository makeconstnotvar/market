import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ComponentViewInformation} from "./information";
import {ComponentViewGallery} from "./gallery";
import {ComponentViewPhoto} from "./photo";
import {ComponentViewSimilar} from "./similar";
import {ComponentViewSocials} from "./socials";
import {ComponentViewSpecification} from "./specification";
import {ComponentViewTitle} from "./title";
import {ComponentViewSeo} from "./seo";


@NgModule({
    declarations: [
        ComponentViewInformation,
        ComponentViewGallery,
        ComponentViewPhoto,
        ComponentViewSimilar,
        ComponentViewSocials,
        ComponentViewSpecification,
        ComponentViewTitle,
        ComponentViewSeo
    ],
    imports: [BrowserModule, RouterModule],
    providers: [],
    exports: [
        ComponentViewInformation,
        ComponentViewGallery,
        ComponentViewPhoto,
        ComponentViewSimilar,
        ComponentViewSocials,
        ComponentViewSpecification,
        ComponentViewTitle,
        ComponentViewSeo
    ]
})
export class ModuleComponentsView {

}