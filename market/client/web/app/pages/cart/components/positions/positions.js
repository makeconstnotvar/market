import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Contract } from "models/contract";
var ComponentCartPositions = (function () {
    function ComponentCartPositions() {
        this.onMinus = new EventEmitter();
        this.onPlus = new EventEmitter();
        this.onDelete = new EventEmitter();
    }
    ComponentCartPositions.prototype.minus = function (idx) {
        this.onMinus.emit(idx);
    };
    ComponentCartPositions.prototype.plus = function (idx) {
        this.onPlus.emit(idx);
    };
    ComponentCartPositions.prototype.del = function (idx) {
        this.onDelete.emit(idx);
    };
    ComponentCartPositions.decorators = [
        { type: Component, args: [{
                    selector: 'cart-positions',
                    templateUrl: 'positions.html'
                },] },
    ];
    ComponentCartPositions.ctorParameters = function () { return []; };
    ComponentCartPositions.propDecorators = {
        "contract": [{ type: Input },],
        "onMinus": [{ type: Output },],
        "onPlus": [{ type: Output },],
        "onDelete": [{ type: Output },],
    };
    return ComponentCartPositions;
}());
export { ComponentCartPositions };
