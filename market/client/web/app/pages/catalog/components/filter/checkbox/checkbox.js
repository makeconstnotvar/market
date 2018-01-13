import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Parameter } from "models/parameter";
export class ComponentFilterCheckbox {
    constructor() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    changeFilter() {
        this.onChangeFilter.emit(this.parameter);
    }
}
ComponentFilterCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'filter-checkbox',
                host: { 'class': 'checkbox d-block' },
                templateUrl: 'checkbox.html'
            },] },
];
ComponentFilterCheckbox.ctorParameters = () => [];
ComponentFilterCheckbox.propDecorators = {
    "parameter": [{ type: Input },],
    "onChangeFilter": [{ type: Output },],
};
//# sourceMappingURL=checkbox.js.map