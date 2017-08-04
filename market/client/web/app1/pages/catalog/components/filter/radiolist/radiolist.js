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
let ComponentFilterRadiolist = class ComponentFilterRadiolist {
    constructor() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    changeFilter(vid) {
        this.parameter.values.forEach(v => v.selected = v._id == vid);
        this.onChangeFilter.emit(this.parameter);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Parameter)
], ComponentFilterRadiolist.prototype, "parameter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentFilterRadiolist.prototype, "onChangeFilter", void 0);
ComponentFilterRadiolist = __decorate([
    Component({
        selector: 'filter-radiolist',
        templateUrl: 'radiolist.html'
    })
], ComponentFilterRadiolist);
export { ComponentFilterRadiolist };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLFNBQVMsRUFBYyxNQUFNLG9CQUFvQixDQUFDO0FBSzFELElBQWEsd0JBQXdCLEdBQXJDO0lBSkE7UUFRSSxjQUFTLEdBQWEsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUd0QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFRbkQsQ0FBQztJQU5HLFlBQVksQ0FBQyxHQUFHO1FBRVosSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxHQUFHLElBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7Q0FFSixDQUFBO0FBWEc7SUFEQyxLQUFLLEVBQUU7OEJBQ0UsU0FBUzsyREFBbUI7QUFHdEM7SUFEQyxNQUFNLEVBQUU7O2dFQUNzQztBQVB0Qyx3QkFBd0I7SUFKcEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsZ0JBQWdCO0tBQ2hDLENBQUM7R0FDVyx3QkFBd0IsQ0FlcEM7U0FmWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhcmFtZXRlciwgIFBhcmFtVmFsdWV9IGZyb20gXCJlbnRpdGllcy9wYXJhbWV0ZXJcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpbHRlci1yYWRpb2xpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdyYWRpb2xpc3QuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEZpbHRlclJhZGlvbGlzdCB7XHJcblxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwYXJhbWV0ZXI6UGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25DaGFuZ2VGaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFBhcmFtZXRlcj4oKTtcclxuXHJcbiAgICBjaGFuZ2VGaWx0ZXIodmlkKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXIudmFsdWVzLmZvckVhY2godj0+di5zZWxlY3RlZD12Ll9pZD09dmlkKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRmlsdGVyLmVtaXQodGhpcy5wYXJhbWV0ZXIpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==