import { Component } from "@angular/core";
var RootLayout = (function () {
    function RootLayout() {
    }
    RootLayout.decorators = [
        { type: Component, args: [{
                    selector: 'application',
                    template: "<router-outlet></router-outlet>"
                },] },
    ];
    RootLayout.ctorParameters = function () { return []; };
    return RootLayout;
}());
export { RootLayout };
