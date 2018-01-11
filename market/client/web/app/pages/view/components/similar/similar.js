import { Component, Input } from "@angular/core";
var ComponentViewSimilar = (function () {
    function ComponentViewSimilar() {
    }
    ComponentViewSimilar.decorators = [
        { type: Component, args: [{
                    selector: 'v-similar',
                    template: "\n<ul>\n    <li *ngFor=\"let product of similar; let i = index;\">\n       {{i}} {{product.name}}\n    </li>\n</ul>\n"
                },] },
    ];
    ComponentViewSimilar.ctorParameters = function () { return []; };
    ComponentViewSimilar.propDecorators = {
        "similar": [{ type: Input },],
    };
    return ComponentViewSimilar;
}());
export { ComponentViewSimilar };
