var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { NavbarItem, CartData } from "models";
let NavbarCartComponent = class NavbarCartComponent {
    constructor() {
        this.data = new NavbarItem();
        this.cartData = new CartData();
    }
};
__decorate([
    Input(),
    __metadata("design:type", NavbarItem)
], NavbarCartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", CartData)
], NavbarCartComponent.prototype, "cartData", void 0);
NavbarCartComponent = __decorate([
    Component({
        selector: 'navbar-cart',
        templateUrl: 'navbar-cart.html'
    })
], NavbarCartComponent);
export { NavbarCartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLWNhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZiYXItY2FydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQU01QyxJQUFhLG1CQUFtQixHQUFoQztJQUpBO1FBTUksU0FBSSxHQUFlLElBQUksVUFBVSxFQUFFLENBQUM7UUFHcEMsYUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7SUFFeEMsQ0FBQztDQUFBLENBQUE7QUFMRztJQURDLEtBQUssRUFBRTs4QkFDRixVQUFVO2lEQUFvQjtBQUdwQztJQURDLEtBQUssRUFBRTs4QkFDRSxRQUFRO3FEQUFrQjtBQUwzQixtQkFBbUI7SUFKL0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLGtCQUFrQjtLQUNsQyxDQUFDO0dBQ1csbUJBQW1CLENBTy9CO1NBUFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05hdmJhckl0ZW0sIENhcnREYXRhfSBmcm9tIFwibW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2YmFyLWNhcnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICduYXZiYXItY2FydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2YmFyQ2FydENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZGF0YTogTmF2YmFySXRlbSA9IG5ldyBOYXZiYXJJdGVtKCk7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGNhcnREYXRhOiBDYXJ0RGF0YSA9IG5ldyBDYXJ0RGF0YSgpO1xyXG5cclxufSJdfQ==