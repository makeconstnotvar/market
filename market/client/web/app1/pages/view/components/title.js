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
let ComponentViewTitle = class ComponentViewTitle {
    constructor() {
        this.onBack = new EventEmitter();
    }
    back() {
        this.onBack.emit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentViewTitle.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentViewTitle.prototype, "details", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ComponentViewTitle.prototype, "isBack", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentViewTitle.prototype, "onBack", void 0);
ComponentViewTitle = __decorate([
    Component({
        selector: 'v-title',
        host: { 'class': 'me-info col-xs-12' },
        template: `
<a (click)="back()" *ngIf="isBack" class="btn btn-red pull-right m-back">
    <i class="fa fa-chevron-left fa--right-gap"></i>Назад
</a>
<h1 class="me-name" >{{name}}</h1>
<div [innerHtml]="details"></div>
`
    })
], ComponentViewTitle);
export { ComponentViewTitle };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aXRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBYXJFLElBQWEsa0JBQWtCLEdBQS9CO0lBWkE7UUF3QkksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLaEMsQ0FBQztJQUhHLElBQUk7UUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RCLENBQUM7Q0FDSixDQUFBO0FBZEc7SUFEQyxLQUFLLEVBQUU7O2dEQUNLO0FBR2I7SUFEQyxLQUFLLEVBQUU7O21EQUNRO0FBR2hCO0lBREMsS0FBSyxFQUFFOztrREFDUTtBQUdoQjtJQURDLE1BQU0sRUFBRTs7a0RBQ21CO0FBWm5CLGtCQUFrQjtJQVo5QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUVuQixJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUM7UUFDcEMsUUFBUSxFQUFFOzs7Ozs7Q0FNYjtLQUNBLENBQUM7R0FDVyxrQkFBa0IsQ0FpQjlCO1NBakJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2LXRpdGxlJyxcclxuXHJcbiAgICBob3N0OiB7J2NsYXNzJzogJ21lLWluZm8gY29sLXhzLTEyJ30sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48YSAoY2xpY2spPVwiYmFjaygpXCIgKm5nSWY9XCJpc0JhY2tcIiBjbGFzcz1cImJ0biBidG4tcmVkIHB1bGwtcmlnaHQgbS1iYWNrXCI+XHJcbiAgICA8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdCBmYS0tcmlnaHQtZ2FwXCI+PC9pPtCd0LDQt9Cw0LRcclxuPC9hPlxyXG48aDEgY2xhc3M9XCJtZS1uYW1lXCIgPnt7bmFtZX19PC9oMT5cclxuPGRpdiBbaW5uZXJIdG1sXT1cImRldGFpbHNcIj48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Vmlld1RpdGxlIHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBkZXRhaWxzOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGlzQmFjazogYm9vbGVhbjtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uQmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMub25CYWNrLmVtaXQoKVxyXG4gICAgfVxyXG59Il19