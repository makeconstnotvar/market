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
import { Parameter } from "entities/parameter";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBSzdDLElBQWEscUJBQXFCLEdBQWxDO0lBSkE7UUFPSSxjQUFTLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUd2QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFnQm5ELENBQUM7SUFkRyxZQUFZO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0NBQ0osQ0FBQTtBQW5CRztJQURDLEtBQUssRUFBRTs4QkFDRyxTQUFTO3dEQUFtQjtBQUd2QztJQURDLE1BQU0sRUFBRTs7NkRBQ3NDO0FBTnRDLHFCQUFxQjtJQUpqQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsYUFBYTtLQUM3QixDQUFDO0dBQ1cscUJBQXFCLENBc0JqQztTQXRCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcImVudGl0aWVzL3BhcmFtZXRlclwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmlsdGVyLWlucHV0cycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2lucHV0cy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RmlsdGVySW5wdXRzIHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcGFyYW1ldGVyOiBQYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkNoYW5nZUZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8UGFyYW1ldGVyPigpO1xyXG5cclxuICAgIGNoYW5nZUZpbHRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhcmFtZXRlcik7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZpbHRlci5lbWl0KHRoaXMucGFyYW1ldGVyKVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVG8oKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucGFyYW1ldGVyLnRvO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRmlsdGVyKClcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZyb20oKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucGFyYW1ldGVyLmZyb207XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VGaWx0ZXIoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==