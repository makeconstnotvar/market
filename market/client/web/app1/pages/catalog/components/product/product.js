var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "models/product";
let ComponentCatalogProduct = class ComponentCatalogProduct {
    constructor() {
        this.onPostPosition = new EventEmitter();
    }
    postPosition() {
        this.onPostPosition.emit(this.product);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Product)
], ComponentCatalogProduct.prototype, "product", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentCatalogProduct.prototype, "categoryName", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentCatalogProduct.prototype, "onPostPosition", void 0);
ComponentCatalogProduct = __decorate([
    Component({
        selector: 'cat-product',
        host: { 'class': 'd-flex' },
        templateUrl: 'product.html'
    })
], ComponentCatalogProduct);
export { ComponentCatalogProduct };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFPdkMsSUFBYSx1QkFBdUIsR0FBcEM7SUFMQTtRQWFJLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUtqRCxDQUFDO0lBSEcsWUFBWTtRQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0osQ0FBQTtBQVhHO0lBREMsS0FBSyxFQUFFOzhCQUNDLE9BQU87d0RBQUM7QUFHakI7SUFEQyxLQUFLLEVBQUU7OzZEQUNhO0FBR3JCO0lBREMsTUFBTSxFQUFFOzsrREFDb0M7QUFScEMsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUM7UUFDekIsV0FBVyxFQUFFLGNBQWM7S0FDOUIsQ0FBQztHQUNXLHVCQUF1QixDQWFuQztTQWJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIm1vZGVscy9wcm9kdWN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2F0LXByb2R1Y3QnLFxyXG4gICAgaG9zdDogeydjbGFzcyc6ICdkLWZsZXgnfSxcclxuICAgIHRlbXBsYXRlVXJsOiAncHJvZHVjdC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q2F0YWxvZ1Byb2R1Y3Qge1xyXG4gICAgQElucHV0KClcclxuICAgIHByb2R1Y3Q6IFByb2R1Y3Q7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25Qb3N0UG9zaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPFByb2R1Y3Q+KCk7XHJcblxyXG4gICAgcG9zdFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMub25Qb3N0UG9zaXRpb24uZW1pdCh0aGlzLnByb2R1Y3QpO1xyXG4gICAgfVxyXG59Il19