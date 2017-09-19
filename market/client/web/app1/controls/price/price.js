var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, trigger, state, style, transition, animate } from "@angular/core";
import { Product } from "models";
let PriceControl = class PriceControl {
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
], PriceControl.prototype, "product", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PriceControl.prototype, "onPostPosition", void 0);
PriceControl = __decorate([
    Component({
        selector: 'price',
        host: { 'class': 'price' },
        animations: [
            trigger('inCartChanged', [
                state('true', style({ opacity: 1 })),
                state('false', style({ opacity: 0 })),
                transition('* => *', animate('300ms linear'))
            ])
        ],
        templateUrl: 'price.html'
    })
], PriceControl);
export { PriceControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFFBQVEsQ0FBQztBQWMvQixJQUFhLFlBQVksR0FBekI7SUFiQTtRQW1CSSxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFNakQsQ0FBQztJQUpHLFlBQVksQ0FBQyxPQUFPO1FBQ2hCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDSixDQUFBO0FBVEc7SUFEQyxLQUFLLEVBQUU7OEJBQ0EsT0FBTzs2Q0FBQztBQUdoQjtJQURDLE1BQU0sRUFBRTs7b0RBQ29DO0FBTnBDLFlBQVk7SUFieEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQztRQUV4QixVQUFVLEVBQUU7WUFDUixPQUFPLENBQUMsZUFBZSxFQUFFO2dCQUNyQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUNsQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUNuQyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNoRCxDQUFDO1NBQ0w7UUFDRCxXQUFXLEVBQUUsWUFBWTtLQUM1QixDQUFDO0dBQ1csWUFBWSxDQVl4QjtTQVpZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCJtb2RlbHNcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHJpY2UnLFxuICAgIGhvc3Q6IHsnY2xhc3MnOiAncHJpY2UnfSxcblxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignaW5DYXJ0Q2hhbmdlZCcsIFtcbiAgICAgICAgICAgIHN0YXRlKCd0cnVlJywgc3R5bGUoe29wYWNpdHk6IDF9KSksXG4gICAgICAgICAgICBzdGF0ZSgnZmFsc2UnLCBzdHlsZSh7b3BhY2l0eTogMH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gKicsIGFuaW1hdGUoJzMwMG1zIGxpbmVhcicpKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgdGVtcGxhdGVVcmw6ICdwcmljZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQcmljZUNvbnRyb2wge1xuXG4gICAgQElucHV0KClcbiAgICBwcm9kdWN0OlByb2R1Y3Q7XG5cbiAgICBAT3V0cHV0KClcbiAgICBvblBvc3RQb3NpdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8UHJvZHVjdD4oKTtcblxuICAgIHBvc3RQb3NpdGlvbihwcm9kdWN0KSB7XG4gICAgICAgIHByb2R1Y3QuaW5DYXJ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblBvc3RQb3NpdGlvbi5lbWl0KHByb2R1Y3QpO1xuICAgIH1cbn0iXX0=