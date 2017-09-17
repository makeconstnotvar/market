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
import { Product } from "models/product";
let ComponentCatalogProduct = class ComponentCatalogProduct {
};
__decorate([
    Input(),
    __metadata("design:type", Product)
], ComponentCatalogProduct.prototype, "product", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentCatalogProduct.prototype, "categoryName", void 0);
ComponentCatalogProduct = __decorate([
    Component({
        selector: 'cat-product',
        host: { 'class': 'd-flex' },
        templateUrl: 'product.html'
    })
], ComponentCatalogProduct);
export { ComponentCatalogProduct };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT3ZDLElBQWEsdUJBQXVCLEdBQXBDO0NBTUMsQ0FBQTtBQUpHO0lBREMsS0FBSyxFQUFFOzhCQUNDLE9BQU87d0RBQUM7QUFHakI7SUFEQyxLQUFLLEVBQUU7OzZEQUNhO0FBTFosdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUM7UUFDeEIsV0FBVyxFQUFFLGNBQWM7S0FDOUIsQ0FBQztHQUNXLHVCQUF1QixDQU1uQztTQU5ZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIm1vZGVscy9wcm9kdWN0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2F0LXByb2R1Y3QnLFxuICAgIGhvc3Q6IHsnY2xhc3MnOidkLWZsZXgnfSxcbiAgICB0ZW1wbGF0ZVVybDogJ3Byb2R1Y3QuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q2F0YWxvZ1Byb2R1Y3Qge1xuICAgIEBJbnB1dCgpXG4gICAgcHJvZHVjdDogUHJvZHVjdDtcblxuICAgIEBJbnB1dCgpXG4gICAgY2F0ZWdvcnlOYW1lOiBzdHJpbmc7XG59Il19