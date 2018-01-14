import { Component, Input, Output, EventEmitter } from "@angular/core";
var ComponentSpecialsProducts = (function () {
    function ComponentSpecialsProducts() {
        this.onPostPosition = new EventEmitter();
    }
    ComponentSpecialsProducts.prototype.postPosition = function (product) {
        this.onPostPosition.emit(product);
    };
    ComponentSpecialsProducts.decorators = [
        { type: Component, args: [{
                    selector: 'sp-products',
                    templateUrl: 'products.html'
                },] },
    ];
    ComponentSpecialsProducts.ctorParameters = function () { return []; };
    ComponentSpecialsProducts.propDecorators = {
        "products": [{ type: Input },],
        "onPostPosition": [{ type: Output },],
    };
    return ComponentSpecialsProducts;
}());
export { ComponentSpecialsProducts };
