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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUlyQyxJQUFhLGFBQWEsR0FBMUI7SUFEQTtRQUdZLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztRQUUzQyxlQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUs1RCxDQUFDO0lBSFUsY0FBYyxDQUFDLFFBQWtCO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDSixDQUFBO0FBVFksYUFBYTtJQUR6QixVQUFVLEVBQUU7R0FDQSxhQUFhLENBU3pCO1NBVFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XHJcbmltcG9ydCB7Q2FydERhdGF9IGZyb20gXCJlbnRpdGllcy9jYXJ0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXZiYXJTZXJ2aWNle1xyXG5cclxuICAgIHByaXZhdGUgY2FydERhdGFTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Q2FydERhdGE+KCk7XHJcblxyXG4gICAgcHVibGljIG9ic2VydmFibGUgPSB0aGlzLmNhcnREYXRhU3ViamVjdC5hc09ic2VydmFibGUoKTsvLy5zdWJzY3JpYmU7XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUNhcnREYXRhKGNhcnREYXRhOiBDYXJ0RGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2FydERhdGFTdWJqZWN0Lm5leHQoY2FydERhdGEpO1xyXG4gICAgfVxyXG59Il19