import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Parameter } from "models/parameter";
var ComponentFilterCheckboxlist = (function () {
    function ComponentFilterCheckboxlist() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    ComponentFilterCheckboxlist.prototype.changeFilter = function () {
        this.onChangeFilter.emit(this.parameter);
    };
    ComponentFilterCheckboxlist.decorators = [
        { type: Component, args: [{
                    selector: 'filter-checkboxlist',
                    templateUrl: 'checkboxlist.html'
                },] },
    ];
    ComponentFilterCheckboxlist.ctorParameters = function () { return []; };
    ComponentFilterCheckboxlist.propDecorators = {
        "parameter": [{ type: Input },],
        "onChangeFilter": [{ type: Output },],
    };
    return ComponentFilterCheckboxlist;
}());
export { ComponentFilterCheckboxlist };
