import { Component, Input } from "@angular/core";
import { NavbarItem } from "models/index";
export class NavbarItemComponent {
}
NavbarItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'navbar-item',
                templateUrl: 'navbar-item.html'
            },] },
];
NavbarItemComponent.ctorParameters = () => [];
NavbarItemComponent.propDecorators = {
    "data": [{ type: Input },],
};
//# sourceMappingURL=navbar-item.js.map