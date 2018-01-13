import { Component, Input } from "@angular/core";
export class ComponentViewSimilar {
}
ComponentViewSimilar.decorators = [
    { type: Component, args: [{
                selector: 'v-similar',
                template: `
<ul>
    <li *ngFor="let product of similar; let i = index;">
       {{i}} {{product.name}}
    </li>
</ul>
`
            },] },
];
ComponentViewSimilar.ctorParameters = () => [];
ComponentViewSimilar.propDecorators = {
    "similar": [{ type: Input },],
};
//# sourceMappingURL=similar.js.map