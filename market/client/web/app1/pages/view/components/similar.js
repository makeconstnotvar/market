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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltaWxhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbWlsYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFZL0MsSUFBYSxvQkFBb0IsR0FBakM7Q0FHQyxDQUFBO0FBREc7SUFEQyxLQUFLLEVBQUU7O3FEQUNXO0FBRlYsb0JBQW9CO0lBVmhDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRTs7Ozs7O0NBTWI7S0FDQSxDQUFDO0dBQ1csb0JBQW9CLENBR2hDO1NBSFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCJtb2RlbHMvcHJvZHVjdFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndi1zaW1pbGFyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbjx1bD5cclxuICAgIDxsaSAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBzaW1pbGFyOyBsZXQgaSA9IGluZGV4O1wiPlxyXG4gICAgICAge3tpfX0ge3twcm9kdWN0Lm5hbWV9fVxyXG4gICAgPC9saT5cclxuPC91bD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Vmlld1NpbWlsYXIge1xyXG4gICAgQElucHV0KClcclxuICAgIHNpbWlsYXI6IFByb2R1Y3RbXTtcclxufSJdfQ==