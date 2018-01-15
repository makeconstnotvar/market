import { Component, Input } from "@angular/core";
import { NavbarItem } from "models/index";
var NavbarItemComponent = (function () {
    function NavbarItemComponent() {
    }
    NavbarItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'navbar-item',
                    templateUrl: 'navbar-item.html'
                },] },
    ];
    NavbarItemComponent.ctorParameters = function () { return []; };
    NavbarItemComponent.propDecorators = {
        "data": [{ type: Input },],
    };
    return NavbarItemComponent;
}());
export { NavbarItemComponent };
