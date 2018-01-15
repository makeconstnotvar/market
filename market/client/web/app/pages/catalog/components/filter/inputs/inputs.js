import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Parameter } from "models/parameter";
var ComponentFilterInputs = (function () {
    function ComponentFilterInputs() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    ComponentFilterInputs.prototype.changeFilter = function () {
        console.log(this.parameter);
        this.onChangeFilter.emit(this.parameter);
    };
    ComponentFilterInputs.prototype.clearTo = function () {
        delete this.parameter.to;
        this.changeFilter();
    };
    ComponentFilterInputs.prototype.clearFrom = function () {
        delete this.parameter.from;
        this.changeFilter();
    };
    ComponentFilterInputs.prototype.focus = function (f) {
        f = true;
    };
    ComponentFilterInputs.prototype.blur = function (f) {
        f = false;
    };
    ComponentFilterInputs.decorators = [
        { type: Component, args: [{
                    selector: 'filter-inputs',
                    templateUrl: 'inputs.html'
                },] },
    ];
    ComponentFilterInputs.ctorParameters = function () { return []; };
    ComponentFilterInputs.propDecorators = {
        "parameter": [{ type: Input },],
        "onChangeFilter": [{ type: Output },],
    };
    return ComponentFilterInputs;
}());
export { ComponentFilterInputs };
