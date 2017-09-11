var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "models/product";
let ComponentSpecialsProduct = class ComponentSpecialsProduct {
    constructor() {
        this.onPostPosition = new EventEmitter();
    }
    postPosition(product) {
        product.inCart = true;
        this.onPostPosition.emit(product);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Product)
], ComponentSpecialsProduct.prototype, "product", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentSpecialsProduct.prototype, "onPostPosition", void 0);
ComponentSpecialsProduct = __decorate([
    Component({
        selector: 'sp-product',
        host: { 'class': 'product' },
        template: `
<div class="special-product__image col-xxs-12 col-xs-6 col-sm-12">
    <a class="special-product__image-link" routerLink="/{{product.caturl}}/{{product.url}}">
        <img fade-in src="/photos/{{product._id}}/l_{{product.cover}}">
    </a>
</div>
<div class="special-product__info col-xxs-12 col-xs-6 col-sm-12">
    <a class="special-product__name" routerLink="/{{product.caturl}}/{{product.url}}">{{product.name}}</a>
    <price (onPostPosition)="postPosition($event)" [product]="product"></price>
</div>`
    })
], ComponentSpecialsProduct);
export { ComponentSpecialsProduct };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFnQnZDLElBQWEsd0JBQXdCLEdBQXJDO0lBZEE7UUFxQkksbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBTWpELENBQUM7SUFKRyxZQUFZLENBQUMsT0FBTztRQUNoQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0osQ0FBQTtBQVRHO0lBREMsS0FBSyxFQUFFOzhCQUNDLE9BQU87eURBQUM7QUFHakI7SUFEQyxNQUFNLEVBQUU7O2dFQUNvQztBQVBwQyx3QkFBd0I7SUFkcEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQztRQUMxQixRQUFRLEVBQUU7Ozs7Ozs7OztPQVNQO0tBQ04sQ0FBQztHQUNXLHdCQUF3QixDQWFwQztTQWJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIm1vZGVscy9wcm9kdWN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3AtcHJvZHVjdCcsXHJcbiAgICBob3N0OiB7J2NsYXNzJzogJ3Byb2R1Y3QnfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbjxkaXYgY2xhc3M9XCJzcGVjaWFsLXByb2R1Y3RfX2ltYWdlIGNvbC14eHMtMTIgY29sLXhzLTYgY29sLXNtLTEyXCI+XHJcbiAgICA8YSBjbGFzcz1cInNwZWNpYWwtcHJvZHVjdF9faW1hZ2UtbGlua1wiIHJvdXRlckxpbms9XCIve3twcm9kdWN0LmNhdHVybH19L3t7cHJvZHVjdC51cmx9fVwiPlxyXG4gICAgICAgIDxpbWcgZmFkZS1pbiBzcmM9XCIvcGhvdG9zL3t7cHJvZHVjdC5faWR9fS9sX3t7cHJvZHVjdC5jb3Zlcn19XCI+XHJcbiAgICA8L2E+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwic3BlY2lhbC1wcm9kdWN0X19pbmZvIGNvbC14eHMtMTIgY29sLXhzLTYgY29sLXNtLTEyXCI+XHJcbiAgICA8YSBjbGFzcz1cInNwZWNpYWwtcHJvZHVjdF9fbmFtZVwiIHJvdXRlckxpbms9XCIve3twcm9kdWN0LmNhdHVybH19L3t7cHJvZHVjdC51cmx9fVwiPnt7cHJvZHVjdC5uYW1lfX08L2E+XHJcbiAgICA8cHJpY2UgKG9uUG9zdFBvc2l0aW9uKT1cInBvc3RQb3NpdGlvbigkZXZlbnQpXCIgW3Byb2R1Y3RdPVwicHJvZHVjdFwiPjwvcHJpY2U+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFNwZWNpYWxzUHJvZHVjdCB7XHJcblxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwcm9kdWN0OiBQcm9kdWN0O1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25Qb3N0UG9zaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPFByb2R1Y3Q+KCk7XHJcblxyXG4gICAgcG9zdFBvc2l0aW9uKHByb2R1Y3QpIHtcclxuICAgICAgICBwcm9kdWN0LmluQ2FydCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vblBvc3RQb3NpdGlvbi5lbWl0KHByb2R1Y3QpO1xyXG4gICAgfVxyXG59Il19