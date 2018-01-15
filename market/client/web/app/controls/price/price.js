import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "models/index";
var PriceControl = (function () {
    function PriceControl() {
        this.onPostPosition = new EventEmitter();
    }
    PriceControl.prototype.postPosition = function (product) {
        product.inCart = true;
        this.onPostPosition.emit(product);
    };
    PriceControl.decorators = [
        { type: Component, args: [{
                    selector: 'price',
                    templateUrl: 'price.html'
                },] },
    ];
    PriceControl.ctorParameters = function () { return []; };
    PriceControl.propDecorators = {
        "product": [{ type: Input },],
        "onPostPosition": [{ type: Output },],
    };
    return PriceControl;
}());
export { PriceControl };
