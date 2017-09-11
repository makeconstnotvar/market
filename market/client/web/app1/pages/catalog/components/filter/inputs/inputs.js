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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBSzNDLElBQWEscUJBQXFCLEdBQWxDO0lBSkE7UUFPSSxjQUFTLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUd2QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFnQm5ELENBQUM7SUFkRyxZQUFZO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0NBQ0osQ0FBQTtBQW5CRztJQURDLEtBQUssRUFBRTs4QkFDRyxTQUFTO3dEQUFtQjtBQUd2QztJQURDLE1BQU0sRUFBRTs7NkRBQ3NDO0FBTnRDLHFCQUFxQjtJQUpqQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsYUFBYTtLQUM3QixDQUFDO0dBQ1cscUJBQXFCLENBc0JqQztTQXRCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcIm1vZGVscy9wYXJhbWV0ZXJcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpbHRlci1pbnB1dHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdpbnB1dHMuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEZpbHRlcklucHV0cyB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHBhcmFtZXRlcjogUGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25DaGFuZ2VGaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFBhcmFtZXRlcj4oKTtcclxuXHJcbiAgICBjaGFuZ2VGaWx0ZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wYXJhbWV0ZXIpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VGaWx0ZXIuZW1pdCh0aGlzLnBhcmFtZXRlcilcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclRvKCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhcmFtZXRlci50bztcclxuICAgICAgICB0aGlzLmNoYW5nZUZpbHRlcigpXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGcm9tKCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhcmFtZXRlci5mcm9tO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRmlsdGVyKClcclxuICAgIH1cclxufVxyXG4iXX0=