import { Component, Input } from "@angular/core";
import { NavbarItem, CartData } from "models/index";
export class NavbarCartComponent {
    constructor() {
        this.data = new NavbarItem();
        this.cartData = new CartData();
    }
}
NavbarCartComponent.decorators = [
    { type: Component, args: [{
                selector: 'navbar-cart',
                templateUrl: 'navbar-cart.html'
            },] },
];
NavbarCartComponent.ctorParameters = () => [];
NavbarCartComponent.propDecorators = {
    "data": [{ type: Input },],
    "cartData": [{ type: Input },],
};
//# sourceMappingURL=navbar-cart.js.map