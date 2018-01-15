import { Component, Input } from "@angular/core";
import { NavbarItem } from "models/index";
var NavbarBrandComponent = (function () {
    function NavbarBrandComponent() {
    }
    NavbarBrandComponent.decorators = [
        { type: Component, args: [{
                    selector: 'navbar-brand',
                    templateUrl: 'navbar-brand.html'
                },] },
    ];
    NavbarBrandComponent.ctorParameters = function () { return []; };
    NavbarBrandComponent.propDecorators = {
        "data": [{ type: Input },],
    };
    return NavbarBrandComponent;
}());
export { NavbarBrandComponent };
