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
let ComponentSpecialsProducts = class ComponentSpecialsProducts {
    constructor() {
        this.onPostPosition = new EventEmitter();
    }
    postPosition(product) {
        this.onPostPosition.emit(product);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], ComponentSpecialsProducts.prototype, "products", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentSpecialsProducts.prototype, "onPostPosition", void 0);
ComponentSpecialsProducts = __decorate([
    Component({
        selector: 'sp-products',
        template: `
<h2 class="col-xs-12">Самое интересное</h2>
<sp-product (onPostPosition)="postPosition($event)"  class="special-product mm-special col-md-3 col-sm-4 col-xs-12" [ngClass]="{'hidden-lg hidden-md':last}" *ngFor="let product of products;let last = last;" [product]="product"></sp-product>

    
`
    })
], ComponentSpecialsProducts);
export { ComponentSpecialsProducts };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBWXJFLElBQWEseUJBQXlCLEdBQXRDO0lBVkE7UUFnQkksbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBS2pELENBQUM7SUFIRyxZQUFZLENBQUMsT0FBTztRQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0osQ0FBQTtBQVJHO0lBREMsS0FBSyxFQUFFOzsyREFDWTtBQUdwQjtJQURDLE1BQU0sRUFBRTs7aUVBQ29DO0FBTnBDLHlCQUF5QjtJQVZyQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUV2QixRQUFRLEVBQUU7Ozs7O0NBS2I7S0FDQSxDQUFDO0dBQ1cseUJBQXlCLENBV3JDO1NBWFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiZW50aXRpZXMvcHJvZHVjdFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3AtcHJvZHVjdHMnLFxyXG5cclxuICAgIHRlbXBsYXRlOiBgXHJcbjxoMiBjbGFzcz1cImNvbC14cy0xMlwiPtCh0LDQvNC+0LUg0LjQvdGC0LXRgNC10YHQvdC+0LU8L2gyPlxyXG48c3AtcHJvZHVjdCAob25Qb3N0UG9zaXRpb24pPVwicG9zdFBvc2l0aW9uKCRldmVudClcIiAgY2xhc3M9XCJzcGVjaWFsLXByb2R1Y3QgbW0tc3BlY2lhbCBjb2wtbWQtMyBjb2wtc20tNCBjb2wteHMtMTJcIiBbbmdDbGFzc109XCJ7J2hpZGRlbi1sZyBoaWRkZW4tbWQnOmxhc3R9XCIgKm5nRm9yPVwibGV0IHByb2R1Y3Qgb2YgcHJvZHVjdHM7bGV0IGxhc3QgPSBsYXN0O1wiIFtwcm9kdWN0XT1cInByb2R1Y3RcIj48L3NwLXByb2R1Y3Q+XHJcblxyXG4gICAgXHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFNwZWNpYWxzUHJvZHVjdHMge1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwcm9kdWN0czogUHJvZHVjdFtdO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25Qb3N0UG9zaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPFByb2R1Y3Q+KCk7XHJcblxyXG4gICAgcG9zdFBvc2l0aW9uKHByb2R1Y3QpIHtcclxuICAgICAgICB0aGlzLm9uUG9zdFBvc2l0aW9uLmVtaXQocHJvZHVjdCk7XHJcbiAgICB9XHJcbn0iXX0=