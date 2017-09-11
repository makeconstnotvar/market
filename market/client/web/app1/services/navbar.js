var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
let NavbarService = class NavbarService {
    constructor() {
        this.cartDataSubject = new Subject();
        this.observable = this.cartDataSubject.asObservable();
    }
    updateCartData(cartData) {
        this.cartDataSubject.next(cartData);
    }
};
NavbarService = __decorate([
    Injectable()
], NavbarService);
export { NavbarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUlyQyxJQUFhLGFBQWEsR0FBMUI7SUFEQTtRQUdZLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztRQUUzQyxlQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUs1RCxDQUFDO0lBSFUsY0FBYyxDQUFDLFFBQWtCO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDSixDQUFBO0FBVFksYUFBYTtJQUR6QixVQUFVLEVBQUU7R0FDQSxhQUFhLENBU3pCO1NBVFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XHJcbmltcG9ydCB7Q2FydERhdGF9IGZyb20gXCJtb2RlbHNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hdmJhclNlcnZpY2V7XHJcblxyXG4gICAgcHJpdmF0ZSBjYXJ0RGF0YVN1YmplY3QgPSBuZXcgU3ViamVjdDxDYXJ0RGF0YT4oKTtcclxuXHJcbiAgICBwdWJsaWMgb2JzZXJ2YWJsZSA9IHRoaXMuY2FydERhdGFTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpOy8vLnN1YnNjcmliZTtcclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQ2FydERhdGEoY2FydERhdGE6IENhcnREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jYXJ0RGF0YVN1YmplY3QubmV4dChjYXJ0RGF0YSk7XHJcbiAgICB9XHJcbn0iXX0=