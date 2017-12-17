import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Contract } from "models/contract";
export class ComponentCartPositions {
    constructor() {
        this.onMinus = new EventEmitter();
        this.onPlus = new EventEmitter();
        this.onDelete = new EventEmitter();
    }
    minus(idx) {
        this.onMinus.emit(idx);
    }
    plus(idx) {
        this.onPlus.emit(idx);
    }
    del(idx) {
        this.onDelete.emit(idx);
    }
}
ComponentCartPositions.decorators = [
    { type: Component, args: [{
                selector: 'cart-positions',
                templateUrl: 'positions.html'
            },] },
];
ComponentCartPositions.ctorParameters = () => [];
ComponentCartPositions.propDecorators = {
    "contract": [{ type: Input },],
    "onMinus": [{ type: Output },],
    "onPlus": [{ type: Output },],
    "onDelete": [{ type: Output },],
};
//# sourceMappingURL=positions.js.map