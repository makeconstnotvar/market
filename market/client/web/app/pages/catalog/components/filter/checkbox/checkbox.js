import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Parameter } from "models/parameter";
var ComponentFilterCheckbox = (function () {
    function ComponentFilterCheckbox() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    ComponentFilterCheckbox.prototype.changeFilter = function () {
        this.onChangeFilter.emit(this.parameter);
    };
    ComponentFilterCheckbox.decorators = [
        { type: Component, args: [{
                    selector: 'filter-checkbox',
                    host: { 'class': 'checkbox d-block' },
                    templateUrl: 'checkbox.html'
                },] },
    ];
    ComponentFilterCheckbox.ctorParameters = function () { return []; };
    ComponentFilterCheckbox.propDecorators = {
        "parameter": [{ type: Input },],
        "onChangeFilter": [{ type: Output },],
    };
    return ComponentFilterCheckbox;
}());
export { ComponentFilterCheckbox };
