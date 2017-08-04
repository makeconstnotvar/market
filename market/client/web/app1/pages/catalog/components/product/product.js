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
import { Product } from "entities/product";
let ComponentCatalogProduct = class ComponentCatalogProduct {
};
__decorate([
    Input(),
    __metadata("design:type", Product)
], ComponentCatalogProduct.prototype, "product", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentCatalogProduct.prototype, "categoryId", void 0);
ComponentCatalogProduct = __decorate([
    Component({
        selector: 'cat-product',
        templateUrl: 'product.html'
    })
], ComponentCatalogProduct);
export { ComponentCatalogProduct };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBTXpDLElBQWEsdUJBQXVCLEdBQXBDO0NBTUMsQ0FBQTtBQUpHO0lBREMsS0FBSyxFQUFFOzhCQUNDLE9BQU87d0RBQUM7QUFHakI7SUFEQyxLQUFLLEVBQUU7OzJEQUNXO0FBTFYsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBRXZCLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7R0FDVyx1QkFBdUIsQ0FNbkM7U0FOWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcImVudGl0aWVzL3Byb2R1Y3RcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NhdC1wcm9kdWN0JyxcclxuXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3Byb2R1Y3QuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudENhdGFsb2dQcm9kdWN0IHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBwcm9kdWN0OiBQcm9kdWN0O1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBjYXRlZ29yeUlkOiBzdHJpbmc7XHJcbn0iXX0=