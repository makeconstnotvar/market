import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "models/product";
export class ComponentCatalogProduct {
    constructor() {
        this.onPostPosition = new EventEmitter();
    }
    postPosition() {
        this.product.inCart = true;
        this.onPostPosition.emit(this.product);
    }
}
ComponentCatalogProduct.decorators = [
    { type: Component, args: [{
                selector: 'cat-product',
                templateUrl: 'product.html'
            },] },
];
ComponentCatalogProduct.ctorParameters = () => [];
ComponentCatalogProduct.propDecorators = {
    "product": [{ type: Input },],
    "categoryName": [{ type: Input },],
    "onPostPosition": [{ type: Output },],
};
//# sourceMappingURL=product.js.map