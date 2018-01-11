import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "models/product";
var ComponentSpecialsProduct = (function () {
    function ComponentSpecialsProduct() {
        this.onPostPosition = new EventEmitter();
    }
    ComponentSpecialsProduct.prototype.postPosition = function (product) {
        product.inCart = true;
        this.onPostPosition.emit(product);
    };
    ComponentSpecialsProduct.decorators = [
        { type: Component, args: [{
                    selector: 'sp-product',
                    host: { 'class': 'product' },
                    templateUrl: 'product.html'
                },] },
    ];
    ComponentSpecialsProduct.ctorParameters = function () { return []; };
    ComponentSpecialsProduct.propDecorators = {
        "product": [{ type: Input },],
        "onPostPosition": [{ type: Output },],
    };
    return ComponentSpecialsProduct;
}());
export { ComponentSpecialsProduct };
