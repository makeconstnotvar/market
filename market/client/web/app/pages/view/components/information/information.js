import { Component, Input } from "@angular/core";
export class ComponentViewInformation {
}
ComponentViewInformation.decorators = [
    { type: Component, args: [{
                selector: 'v-information',
                host: { 'class': 'me-info col-md-12 col-lg-6' },
                template: `    
<h2>Описание</h2>
<p [innerHTML]="information"></p>
`
            },] },
];
ComponentViewInformation.ctorParameters = () => [];
ComponentViewInformation.propDecorators = {
    "information": [{ type: Input },],
};
//# sourceMappingURL=information.js.map