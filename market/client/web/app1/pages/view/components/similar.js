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
let ComponentViewSimilar = class ComponentViewSimilar {
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], ComponentViewSimilar.prototype, "similar", void 0);
ComponentViewSimilar = __decorate([
    Component({
        selector: 'v-similar',
        template: `
<ul>
    <li *ngFor="let product of similar; let i = index;">
       {{i}} {{product.name}}
    </li>
</ul>
`
    })
], ComponentViewSimilar);
export { ComponentViewSimilar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltaWxhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbWlsYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFZL0MsSUFBYSxvQkFBb0IsR0FBakM7Q0FHQyxDQUFBO0FBREc7SUFEQyxLQUFLLEVBQUU7O3FEQUNXO0FBRlYsb0JBQW9CO0lBVmhDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRTs7Ozs7O0NBTWI7S0FDQSxDQUFDO0dBQ1csb0JBQW9CLENBR2hDO1NBSFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCJlbnRpdGllcy9wcm9kdWN0XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2LXNpbWlsYXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPHVsPlxyXG4gICAgPGxpICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIHNpbWlsYXI7IGxldCBpID0gaW5kZXg7XCI+XHJcbiAgICAgICB7e2l9fSB7e3Byb2R1Y3QubmFtZX19XHJcbiAgICA8L2xpPlxyXG48L3VsPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRWaWV3U2ltaWxhciB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2ltaWxhcjogUHJvZHVjdFtdO1xyXG59Il19