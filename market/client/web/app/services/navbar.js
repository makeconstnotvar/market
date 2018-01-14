import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
var NavbarService = (function () {
    function NavbarService() {
        this.cartDataSubject = new Subject();
    }
    NavbarService.prototype.updateCartData = function (cartData) {
        this.cartDataSubject.next(cartData);
    };
    NavbarService.decorators = [
        { type: Injectable },
    ];
    NavbarService.ctorParameters = function () { return []; };
    return NavbarService;
}());
export { NavbarService };
