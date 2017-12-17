import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Parameter } from "models/parameter";
export class ComponentFilterCheckboxlist {
    constructor() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    changeFilter() {
        this.onChangeFilter.emit(this.parameter);
    }
}
ComponentFilterCheckboxlist.decorators = [
    { type: Component, args: [{
                selector: 'filter-checkboxlist',
                templateUrl: 'checkboxlist.html'
            },] },
];
ComponentFilterCheckboxlist.ctorParameters = () => [];
ComponentFilterCheckboxlist.propDecorators = {
    "parameter": [{ type: Input },],
    "onChangeFilter": [{ type: Output },],
};
//# sourceMappingURL=checkboxlist.js.map