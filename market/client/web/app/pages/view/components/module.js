import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ComponentViewInformation } from "./information/information";
import { ComponentViewGallery } from "./gallery/gallery";
import { ComponentViewPhoto } from "./photo/photo";
import { ComponentViewSimilar } from "./similar/similar";
import { ComponentViewSocials } from "./socials/socials";
import { ComponentViewSpecification } from "./specification/specification";
import { ComponentViewTitle } from "./title/title";
import { ComponentViewSeo } from "./seo/seo";
class ModuleComponentsView {
}
ModuleComponentsView.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
ModuleComponentsView.ctorParameters = () => [];
export { ModuleComponentsView, ComponentViewInformation, ComponentViewGallery, ComponentViewPhoto, ComponentViewSimilar, ComponentViewSocials, ComponentViewSpecification, ComponentViewTitle, ComponentViewSeo };
//# sourceMappingURL=module.js.map