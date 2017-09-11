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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBWXJFLElBQWEseUJBQXlCLEdBQXRDO0lBVkE7UUFnQkksbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBS2pELENBQUM7SUFIRyxZQUFZLENBQUMsT0FBTztRQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0osQ0FBQTtBQVJHO0lBREMsS0FBSyxFQUFFOzsyREFDWTtBQUdwQjtJQURDLE1BQU0sRUFBRTs7aUVBQ29DO0FBTnBDLHlCQUF5QjtJQVZyQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUV2QixRQUFRLEVBQUU7Ozs7O0NBS2I7S0FDQSxDQUFDO0dBQ1cseUJBQXlCLENBV3JDO1NBWFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwibW9kZWxzL3Byb2R1Y3RcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NwLXByb2R1Y3RzJyxcclxuXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48aDIgY2xhc3M9XCJjb2wteHMtMTJcIj7QodCw0LzQvtC1INC40L3RgtC10YDQtdGB0L3QvtC1PC9oMj5cclxuPHNwLXByb2R1Y3QgKG9uUG9zdFBvc2l0aW9uKT1cInBvc3RQb3NpdGlvbigkZXZlbnQpXCIgIGNsYXNzPVwic3BlY2lhbC1wcm9kdWN0IG1tLXNwZWNpYWwgY29sLW1kLTMgY29sLXNtLTQgY29sLXhzLTEyXCIgW25nQ2xhc3NdPVwieydoaWRkZW4tbGcgaGlkZGVuLW1kJzpsYXN0fVwiICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIHByb2R1Y3RzO2xldCBsYXN0ID0gbGFzdDtcIiBbcHJvZHVjdF09XCJwcm9kdWN0XCI+PC9zcC1wcm9kdWN0PlxyXG5cclxuICAgIFxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRTcGVjaWFsc1Byb2R1Y3RzIHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RbXTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uUG9zdFBvc2l0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9kdWN0PigpO1xyXG5cclxuICAgIHBvc3RQb3NpdGlvbihwcm9kdWN0KSB7XHJcbiAgICAgICAgdGhpcy5vblBvc3RQb3NpdGlvbi5lbWl0KHByb2R1Y3QpO1xyXG4gICAgfVxyXG59Il19