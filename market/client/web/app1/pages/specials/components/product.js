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
import { Product } from "entities/product";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFnQnpDLElBQWEsd0JBQXdCLEdBQXJDO0lBZEE7UUFxQkksbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBTWpELENBQUM7SUFKRyxZQUFZLENBQUMsT0FBTztRQUNoQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0osQ0FBQTtBQVRHO0lBREMsS0FBSyxFQUFFOzhCQUNDLE9BQU87eURBQUM7QUFHakI7SUFEQyxNQUFNLEVBQUU7O2dFQUNvQztBQVBwQyx3QkFBd0I7SUFkcEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQztRQUMxQixRQUFRLEVBQUU7Ozs7Ozs7OztPQVNQO0tBQ04sQ0FBQztHQUNXLHdCQUF3QixDQWFwQztTQWJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcImVudGl0aWVzL3Byb2R1Y3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzcC1wcm9kdWN0JyxcclxuICAgIGhvc3Q6IHsnY2xhc3MnOiAncHJvZHVjdCd9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPGRpdiBjbGFzcz1cInNwZWNpYWwtcHJvZHVjdF9faW1hZ2UgY29sLXh4cy0xMiBjb2wteHMtNiBjb2wtc20tMTJcIj5cclxuICAgIDxhIGNsYXNzPVwic3BlY2lhbC1wcm9kdWN0X19pbWFnZS1saW5rXCIgcm91dGVyTGluaz1cIi97e3Byb2R1Y3QuY2F0dXJsfX0ve3twcm9kdWN0LnVybH19XCI+XHJcbiAgICAgICAgPGltZyBmYWRlLWluIHNyYz1cIi9waG90b3Mve3twcm9kdWN0Ll9pZH19L2xfe3twcm9kdWN0LmNvdmVyfX1cIj5cclxuICAgIDwvYT5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJzcGVjaWFsLXByb2R1Y3RfX2luZm8gY29sLXh4cy0xMiBjb2wteHMtNiBjb2wtc20tMTJcIj5cclxuICAgIDxhIGNsYXNzPVwic3BlY2lhbC1wcm9kdWN0X19uYW1lXCIgcm91dGVyTGluaz1cIi97e3Byb2R1Y3QuY2F0dXJsfX0ve3twcm9kdWN0LnVybH19XCI+e3twcm9kdWN0Lm5hbWV9fTwvYT5cclxuICAgIDxwcmljZSAob25Qb3N0UG9zaXRpb24pPVwicG9zdFBvc2l0aW9uKCRldmVudClcIiBbcHJvZHVjdF09XCJwcm9kdWN0XCI+PC9wcmljZT5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50U3BlY2lhbHNQcm9kdWN0IHtcclxuXHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHByb2R1Y3Q6IFByb2R1Y3Q7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvblBvc3RQb3NpdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8UHJvZHVjdD4oKTtcclxuXHJcbiAgICBwb3N0UG9zaXRpb24ocHJvZHVjdCkge1xyXG4gICAgICAgIHByb2R1Y3QuaW5DYXJ0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uUG9zdFBvc2l0aW9uLmVtaXQocHJvZHVjdCk7XHJcbiAgICB9XHJcbn0iXX0=