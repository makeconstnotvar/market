import { Component, Input } from "@angular/core";
var MenuControl = (function () {
    function MenuControl() {
    }
    MenuControl.decorators = [
        { type: Component, args: [{
                    selector: 'market-menu',
                    templateUrl: 'menu.html'
                },] },
    ];
    MenuControl.ctorParameters = function () { return []; };
    MenuControl.propDecorators = {
        "categories": [{ type: Input },],
    };
    return MenuControl;
}());
export { MenuControl };
