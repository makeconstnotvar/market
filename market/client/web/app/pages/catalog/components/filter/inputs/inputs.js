import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Parameter } from "models/parameter";
export class ComponentFilterInputs {
    constructor() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    changeFilter() {
        console.log(this.parameter);
        this.onChangeFilter.emit(this.parameter);
    }
    clearTo() {
        delete this.parameter.to;
        this.changeFilter();
    }
    clearFrom() {
        delete this.parameter.from;
        this.changeFilter();
    }
    focus(f) {
        f = true;
    }
    blur(f) {
        f = false;
    }
}
ComponentFilterInputs.decorators = [
    { type: Component, args: [{
                selector: 'filter-inputs',
                templateUrl: 'inputs.html'
            },] },
];
ComponentFilterInputs.ctorParameters = () => [];
ComponentFilterInputs.propDecorators = {
    "parameter": [{ type: Input },],
    "onChangeFilter": [{ type: Output },],
};
//# sourceMappingURL=inputs.js.map