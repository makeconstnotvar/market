import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "models/product";
export class ComponentSpecialsProduct {
    constructor() {
        this.onPostPosition = new EventEmitter();
    }
    postPosition(product) {
        product.inCart = true;
        this.onPostPosition.emit(product);
    }
}
ComponentSpecialsProduct.decorators = [
    { type: Component, args: [{
                selector: 'sp-product',
                host: { 'class': 'product' },
                templateUrl: 'product.html'
            },] },
];
ComponentSpecialsProduct.ctorParameters = () => [];
ComponentSpecialsProduct.propDecorators = {
    "product": [{ type: Input },],
    "onPostPosition": [{ type: Output },],
};
//# sourceMappingURL=product.js.map