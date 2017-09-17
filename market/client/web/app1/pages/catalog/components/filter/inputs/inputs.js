var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Parameter } from "models/parameter";
let ComponentFilterInputs = class ComponentFilterInputs {
    constructor() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    changeFilter() {
        console.log(this.parameter);
        this.onChangeFilter.emit(this.parameter);
    }
    clearTo() {
        delete this.parameter.to;
        this.changeFilter();
    }
    clearFrom() {
        delete this.parameter.from;
        this.changeFilter();
    }
    focus(f) {
        f = true;
    }
    blur(f) {
        f = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Parameter)
], ComponentFilterInputs.prototype, "parameter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentFilterInputs.prototype, "onChangeFilter", void 0);
ComponentFilterInputs = __decorate([
    Component({
        selector: 'filter-inputs',
        templateUrl: 'inputs.html'
    })
], ComponentFilterInputs);
export { ComponentFilterInputs };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBTTNDLElBQWEscUJBQXFCLEdBQWxDO0lBSkE7UUFRSSxjQUFTLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUd2QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUF3Qm5ELENBQUM7SUF0QkcsWUFBWTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLENBQUMsQ0FBQztRQUNGLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDZCxDQUFDO0NBQ0osQ0FBQTtBQTNCRztJQURDLEtBQUssRUFBRTs4QkFDRyxTQUFTO3dEQUFtQjtBQUd2QztJQURDLE1BQU0sRUFBRTs7NkRBQ3NDO0FBUHRDLHFCQUFxQjtJQUpqQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsYUFBYTtLQUM3QixDQUFDO0dBQ1cscUJBQXFCLENBK0JqQztTQS9CWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcIm1vZGVscy9wYXJhbWV0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaWx0ZXItaW5wdXRzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnaW5wdXRzLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRGaWx0ZXJJbnB1dHMge1xyXG4gICAgZjE6IGJvb2xlYW47XHJcbiAgICBmMjogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBwYXJhbWV0ZXI6IFBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uQ2hhbmdlRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxQYXJhbWV0ZXI+KCk7XHJcblxyXG4gICAgY2hhbmdlRmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFyYW1ldGVyKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRmlsdGVyLmVtaXQodGhpcy5wYXJhbWV0ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJUbygpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5wYXJhbWV0ZXIudG87XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VGaWx0ZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRnJvbSgpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5wYXJhbWV0ZXIuZnJvbTtcclxuICAgICAgICB0aGlzLmNoYW5nZUZpbHRlcigpXHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXMoZikge1xyXG4gICAgICAgIGYgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGJsdXIoZikge1xyXG4gICAgICAgIGYgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXX0=