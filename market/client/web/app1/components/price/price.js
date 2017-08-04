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
import { Product } from "entities/product";
let PriceComponent = class PriceComponent {
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
], PriceComponent.prototype, "product", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PriceComponent.prototype, "onPostPosition", void 0);
PriceComponent = __decorate([
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
], PriceComponent);
export { PriceComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBY3pDLElBQWEsY0FBYyxHQUEzQjtJQWJBO1FBbUJJLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQU1qRCxDQUFDO0lBSkcsWUFBWSxDQUFDLE9BQU87UUFDaEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNKLENBQUE7QUFURztJQURDLEtBQUssRUFBRTs4QkFDQSxPQUFPOytDQUFDO0FBR2hCO0lBREMsTUFBTSxFQUFFOztzREFDb0M7QUFOcEMsY0FBYztJQWIxQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDO1FBRXhCLFVBQVUsRUFBRTtZQUNSLE9BQU8sQ0FBQyxlQUFlLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7Z0JBQ25DLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ2hELENBQUM7U0FDTDtRQUNELFdBQVcsRUFBRSxZQUFZO0tBQzVCLENBQUM7R0FDVyxjQUFjLENBWTFCO1NBWlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiZW50aXRpZXMvcHJvZHVjdFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJpY2UnLFxyXG4gICAgaG9zdDogeydjbGFzcyc6ICdwcmljZSd9LFxyXG5cclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdpbkNhcnRDaGFuZ2VkJywgW1xyXG4gICAgICAgICAgICBzdGF0ZSgndHJ1ZScsIHN0eWxlKHtvcGFjaXR5OiAxfSkpLFxyXG4gICAgICAgICAgICBzdGF0ZSgnZmFsc2UnLCBzdHlsZSh7b3BhY2l0eTogMH0pKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgnMzAwbXMgbGluZWFyJykpXHJcbiAgICAgICAgXSlcclxuICAgIF0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ByaWNlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcmljZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHByb2R1Y3Q6UHJvZHVjdDtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uUG9zdFBvc2l0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9kdWN0PigpO1xyXG5cclxuICAgIHBvc3RQb3NpdGlvbihwcm9kdWN0KSB7XHJcbiAgICAgICAgcHJvZHVjdC5pbkNhcnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25Qb3N0UG9zaXRpb24uZW1pdChwcm9kdWN0KTtcclxuICAgIH1cclxufSJdfQ==