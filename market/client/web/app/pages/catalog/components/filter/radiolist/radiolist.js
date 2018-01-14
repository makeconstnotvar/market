import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Parameter } from "models/parameter";
var ComponentFilterRadiolist = (function () {
    function ComponentFilterRadiolist() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    ComponentFilterRadiolist.prototype.changeFilter = function (vid) {
        this.parameter.values.forEach(function (v) { return v.selected = v._id == vid; });
        this.onChangeFilter.emit(this.parameter);
    };
    ComponentFilterRadiolist.decorators = [
        { type: Component, args: [{
                    selector: 'filter-radiolist',
                    templateUrl: 'radiolist.html'
                },] },
    ];
    ComponentFilterRadiolist.ctorParameters = function () { return []; };
    ComponentFilterRadiolist.propDecorators = {
        "parameter": [{ type: Input },],
        "onChangeFilter": [{ type: Output },],
    };
    return ComponentFilterRadiolist;
}());
export { ComponentFilterRadiolist };
