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
let ComponentFilterCheckboxlist = class ComponentFilterCheckboxlist {
    constructor() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    changeFilter() {
        this.onChangeFilter.emit(this.parameter);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Parameter)
], ComponentFilterCheckboxlist.prototype, "parameter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentFilterCheckboxlist.prototype, "onChangeFilter", void 0);
ComponentFilterCheckboxlist = __decorate([
    Component({
        selector: 'filter-checkboxlist',
        templateUrl: 'checkboxlist.html'
    })
], ComponentFilterCheckboxlist);
export { ComponentFilterCheckboxlist };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3hsaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hlY2tib3hsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLFNBQVMsRUFBYyxNQUFNLGtCQUFrQixDQUFDO0FBS3hELElBQWEsMkJBQTJCLEdBQXhDO0lBSkE7UUFPSSxjQUFTLEdBQWEsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUd0QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFNbkQsQ0FBQztJQUpHLFlBQVk7UUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDNUMsQ0FBQztDQUVKLENBQUE7QUFURztJQURDLEtBQUssRUFBRTs4QkFDRSxTQUFTOzhEQUFtQjtBQUd0QztJQURDLE1BQU0sRUFBRTs7bUVBQ3NDO0FBTnRDLDJCQUEyQjtJQUp2QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFdBQVcsRUFBRSxtQkFBbUI7S0FDbkMsQ0FBQztHQUNXLDJCQUEyQixDQVl2QztTQVpZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFyYW1ldGVyLCAgUGFyYW1WYWx1ZX0gZnJvbSBcIm1vZGVscy9wYXJhbWV0ZXJcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpbHRlci1jaGVja2JveGxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjaGVja2JveGxpc3QuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEZpbHRlckNoZWNrYm94bGlzdCB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHBhcmFtZXRlcjpQYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkNoYW5nZUZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8UGFyYW1ldGVyPigpO1xyXG5cclxuICAgIGNoYW5nZUZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRmlsdGVyLmVtaXQodGhpcy5wYXJhbWV0ZXIpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==