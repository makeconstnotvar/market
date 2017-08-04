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
let ComponentViewSpecification = class ComponentViewSpecification {
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], ComponentViewSpecification.prototype, "parameters", void 0);
ComponentViewSpecification = __decorate([
    Component({
        selector: 'v-specification',
        host: { 'class': 'me-info col-md-12 col-lg-6' },
        template: `
<h2>Характеристики</h2>
<table class="table table-bordered">
    <tr *ngFor="let parameter of parameters">
        <td>{{parameter.name}}<span *ngIf="parameter.unit">, {{parameter.unit}}</span></td>
        <td><span *ngIf="parameter.value">{{parameter.value}}</span></td>
    </tr>
</table>
`
    })
], ComponentViewSpecification);
export { ComponentViewSpecification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWNpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFjL0MsSUFBYSwwQkFBMEIsR0FBdkM7Q0FJQyxDQUFBO0FBREc7SUFEQyxLQUFLLEVBQUU7OzhEQUNVO0FBSFQsMEJBQTBCO0lBYnRDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLDRCQUE0QixFQUFDO1FBQzdDLFFBQVEsRUFBRTs7Ozs7Ozs7Q0FRYjtLQUNBLENBQUM7R0FDVywwQkFBMEIsQ0FJdEM7U0FKWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2LXNwZWNpZmljYXRpb24nLFxyXG4gICAgaG9zdDogeydjbGFzcyc6ICdtZS1pbmZvIGNvbC1tZC0xMiBjb2wtbGctNid9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPGgyPtCl0LDRgNCw0LrRgtC10YDQuNGB0YLQuNC60Lg8L2gyPlxyXG48dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgPHRyICpuZ0Zvcj1cImxldCBwYXJhbWV0ZXIgb2YgcGFyYW1ldGVyc1wiPlxyXG4gICAgICAgIDx0ZD57e3BhcmFtZXRlci5uYW1lfX08c3BhbiAqbmdJZj1cInBhcmFtZXRlci51bml0XCI+LCB7e3BhcmFtZXRlci51bml0fX08L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQ+PHNwYW4gKm5nSWY9XCJwYXJhbWV0ZXIudmFsdWVcIj57e3BhcmFtZXRlci52YWx1ZX19PC9zcGFuPjwvdGQ+XHJcbiAgICA8L3RyPlxyXG48L3RhYmxlPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRWaWV3U3BlY2lmaWNhdGlvbiB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHBhcmFtZXRlcnM6IGFueVtdO1xyXG59Il19