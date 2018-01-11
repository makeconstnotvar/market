import { Component, Input } from "@angular/core";
import { NavbarItem, CartData } from "models/index";
var NavbarCartComponent = (function () {
    function NavbarCartComponent() {
        this.data = new NavbarItem();
        this.cartData = new CartData();
    }
    NavbarCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'navbar-cart',
                    templateUrl: 'navbar-cart.html'
                },] },
    ];
    NavbarCartComponent.ctorParameters = function () { return []; };
    NavbarCartComponent.propDecorators = {
        "data": [{ type: Input },],
        "cartData": [{ type: Input },],
    };
    return NavbarCartComponent;
}());
export { NavbarCartComponent };
