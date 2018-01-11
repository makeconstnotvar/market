import { Component, Input } from "@angular/core";
var ComponentViewInformation = (function () {
    function ComponentViewInformation() {
    }
    ComponentViewInformation.decorators = [
        { type: Component, args: [{
                    selector: 'v-information',
                    host: { 'class': 'me-info col-md-12 col-lg-6' },
                    template: "    \n<h2>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</h2>\n<p [innerHTML]=\"information\"></p>\n"
                },] },
    ];
    ComponentViewInformation.ctorParameters = function () { return []; };
    ComponentViewInformation.propDecorators = {
        "information": [{ type: Input },],
    };
    return ComponentViewInformation;
}());
export { ComponentViewInformation };
