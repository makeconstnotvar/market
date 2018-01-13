import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Parameter } from "models/parameter";
export class ComponentFilterRadiolist {
    constructor() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    changeFilter(vid) {
        this.parameter.values.forEach(v => v.selected = v._id == vid);
        this.onChangeFilter.emit(this.parameter);
    }
}
ComponentFilterRadiolist.decorators = [
    { type: Component, args: [{
                selector: 'filter-radiolist',
                templateUrl: 'radiolist.html'
            },] },
];
ComponentFilterRadiolist.ctorParameters = () => [];
ComponentFilterRadiolist.propDecorators = {
    "parameter": [{ type: Input },],
    "onChangeFilter": [{ type: Output },],
};
//# sourceMappingURL=radiolist.js.map