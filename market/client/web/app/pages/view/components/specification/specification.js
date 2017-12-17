import { Component, Input } from "@angular/core";
export class ComponentViewSpecification {
}
ComponentViewSpecification.decorators = [
    { type: Component, args: [{
                selector: 'v-specification',
                host: { 'class': 'me-info col-md-12 col-lg-6' },
                template: `
<h2>Характеристики</h2>
<table class="table table-bordered">
    <tr *ngFor="let parameter of parameters">
        <td>{{parameter.name}}<span *ngIf="parameter.unit">, {{parameter.unit}}</span></td>
        <td><span *ngIf="parameter.value">{{parameter.value}}</span></td>
    </tr>
</table>
`
            },] },
];
ComponentViewSpecification.ctorParameters = () => [];
ComponentViewSpecification.propDecorators = {
    "parameters": [{ type: Input },],
};
//# sourceMappingURL=specification.js.map