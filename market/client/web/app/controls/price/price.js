import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "models/index";
export class PriceControl {
    constructor() {
        this.onPostPosition = new EventEmitter();
    }
    postPosition(product) {
        product.inCart = true;
        this.onPostPosition.emit(product);
    }
}
PriceControl.decorators = [
    { type: Component, args: [{
                selector: 'price',
                templateUrl: 'price.html'
            },] },
];
PriceControl.ctorParameters = () => [];
PriceControl.propDecorators = {
    "product": [{ type: Input },],
    "onPostPosition": [{ type: Output },],
};
//# sourceMappingURL=price.js.map