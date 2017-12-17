import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
export class NavbarService {
    constructor() {
        this.cartDataSubject = new Subject();
    }
    updateCartData(cartData) {
        this.cartDataSubject.next(cartData);
    }
}
NavbarService.decorators = [
    { type: Injectable },
];
NavbarService.ctorParameters = () => [];
//# sourceMappingURL=navbar.js.map