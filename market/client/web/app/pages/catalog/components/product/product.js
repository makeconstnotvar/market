import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "models/product";
var ComponentCatalogProduct = (function () {
    function ComponentCatalogProduct() {
        this.onPostPosition = new EventEmitter();
    }
    ComponentCatalogProduct.prototype.postPosition = function () {
        this.product.inCart = true;
        this.onPostPosition.emit(this.product);
    };
    ComponentCatalogProduct.decorators = [
        { type: Component, args: [{
                    selector: 'cat-product',
                    templateUrl: 'product.html'
                },] },
    ];
    ComponentCatalogProduct.ctorParameters = function () { return []; };
    ComponentCatalogProduct.propDecorators = {
        "product": [{ type: Input },],
        "categoryName": [{ type: Input },],
        "onPostPosition": [{ type: Output },],
    };
    return ComponentCatalogProduct;
}());
export { ComponentCatalogProduct };
