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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLFNBQVMsRUFBYyxNQUFNLGtCQUFrQixDQUFDO0FBS3hELElBQWEsd0JBQXdCLEdBQXJDO0lBSkE7UUFRSSxjQUFTLEdBQWEsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUd0QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFRbkQsQ0FBQztJQU5HLFlBQVksQ0FBQyxHQUFHO1FBRVosSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxHQUFHLElBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7Q0FFSixDQUFBO0FBWEc7SUFEQyxLQUFLLEVBQUU7OEJBQ0UsU0FBUzsyREFBbUI7QUFHdEM7SUFEQyxNQUFNLEVBQUU7O2dFQUNzQztBQVB0Qyx3QkFBd0I7SUFKcEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsZ0JBQWdCO0tBQ2hDLENBQUM7R0FDVyx3QkFBd0IsQ0FlcEM7U0FmWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhcmFtZXRlciwgIFBhcmFtVmFsdWV9IGZyb20gXCJtb2RlbHMvcGFyYW1ldGVyXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaWx0ZXItcmFkaW9saXN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAncmFkaW9saXN0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRGaWx0ZXJSYWRpb2xpc3Qge1xyXG5cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcGFyYW1ldGVyOlBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uQ2hhbmdlRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxQYXJhbWV0ZXI+KCk7XHJcblxyXG4gICAgY2hhbmdlRmlsdGVyKHZpZCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGFyYW1ldGVyLnZhbHVlcy5mb3JFYWNoKHY9PnYuc2VsZWN0ZWQ9di5faWQ9PXZpZCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZpbHRlci5lbWl0KHRoaXMucGFyYW1ldGVyKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=