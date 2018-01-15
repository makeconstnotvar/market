import { Component, Input } from "@angular/core";
var ComponentViewSpecification = (function () {
    function ComponentViewSpecification() {
    }
    ComponentViewSpecification.decorators = [
        { type: Component, args: [{
                    selector: 'v-specification',
                    host: { 'class': 'me-info col-md-12 col-lg-6' },
                    template: "\n<h2>\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438</h2>\n<table class=\"table table-bordered\">\n    <tr *ngFor=\"let parameter of parameters\">\n        <td>{{parameter.name}}<span *ngIf=\"parameter.unit\">, {{parameter.unit}}</span></td>\n        <td><span *ngIf=\"parameter.value\">{{parameter.value}}</span></td>\n    </tr>\n</table>\n"
                },] },
    ];
    ComponentViewSpecification.ctorParameters = function () { return []; };
    ComponentViewSpecification.propDecorators = {
        "parameters": [{ type: Input },],
    };
    return ComponentViewSpecification;
}());
export { ComponentViewSpecification };
