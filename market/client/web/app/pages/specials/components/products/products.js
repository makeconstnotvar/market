import { Component, Input, Output, EventEmitter } from "@angular/core";
export class ComponentSpecialsProducts {
    constructor() {
        this.onPostPosition = new EventEmitter();
    }
    postPosition(product) {
        this.onPostPosition.emit(product);
    }
}
ComponentSpecialsProducts.decorators = [
    { type: Component, args: [{
                selector: 'sp-products',
                templateUrl: 'products.html'
            },] },
];
ComponentSpecialsProducts.ctorParameters = () => [];
ComponentSpecialsProducts.propDecorators = {
    "products": [{ type: Input },],
    "onPostPosition": [{ type: Output },],
};
//# sourceMappingURL=products.js.map