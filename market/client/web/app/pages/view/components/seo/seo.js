import { Component, Input } from "@angular/core";
export class ComponentViewSeo {
}
ComponentViewSeo.decorators = [
    { type: Component, args: [{
                selector: 'v-seo',
                template: `
<div [innerHtml]="seo"></div>
`
            },] },
];
ComponentViewSeo.ctorParameters = () => [];
ComponentViewSeo.propDecorators = {
    "seo": [{ type: Input },],
};
//# sourceMappingURL=seo.js.map