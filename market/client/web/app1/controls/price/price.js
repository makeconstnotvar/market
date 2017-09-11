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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFFBQVEsQ0FBQztBQWMvQixJQUFhLFlBQVksR0FBekI7SUFiQTtRQW1CSSxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFNakQsQ0FBQztJQUpHLFlBQVksQ0FBQyxPQUFPO1FBQ2hCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDSixDQUFBO0FBVEc7SUFEQyxLQUFLLEVBQUU7OEJBQ0EsT0FBTzs2Q0FBQztBQUdoQjtJQURDLE1BQU0sRUFBRTs7b0RBQ29DO0FBTnBDLFlBQVk7SUFieEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQztRQUV4QixVQUFVLEVBQUU7WUFDUixPQUFPLENBQUMsZUFBZSxFQUFFO2dCQUNyQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUNsQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUNuQyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNoRCxDQUFDO1NBQ0w7UUFDRCxXQUFXLEVBQUUsWUFBWTtLQUM1QixDQUFDO0dBQ1csWUFBWSxDQVl4QjtTQVpZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIm1vZGVsc1wiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJpY2UnLFxyXG4gICAgaG9zdDogeydjbGFzcyc6ICdwcmljZSd9LFxyXG5cclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdpbkNhcnRDaGFuZ2VkJywgW1xyXG4gICAgICAgICAgICBzdGF0ZSgndHJ1ZScsIHN0eWxlKHtvcGFjaXR5OiAxfSkpLFxyXG4gICAgICAgICAgICBzdGF0ZSgnZmFsc2UnLCBzdHlsZSh7b3BhY2l0eTogMH0pKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgnMzAwbXMgbGluZWFyJykpXHJcbiAgICAgICAgXSlcclxuICAgIF0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ByaWNlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcmljZUNvbnRyb2wge1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwcm9kdWN0OlByb2R1Y3Q7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvblBvc3RQb3NpdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8UHJvZHVjdD4oKTtcclxuXHJcbiAgICBwb3N0UG9zaXRpb24ocHJvZHVjdCkge1xyXG4gICAgICAgIHByb2R1Y3QuaW5DYXJ0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uUG9zdFBvc2l0aW9uLmVtaXQocHJvZHVjdCk7XHJcbiAgICB9XHJcbn0iXX0=