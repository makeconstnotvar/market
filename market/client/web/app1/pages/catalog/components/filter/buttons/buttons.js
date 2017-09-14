var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from "@angular/core";
let ComponentFilterButtons = class ComponentFilterButtons {
    constructor() {
        this.onApplyFilter = new EventEmitter();
        this.onClearFilter = new EventEmitter();
    }
    applyFilter() {
        this.onApplyFilter.emit();
    }
    clearFilter() {
        this.onClearFilter.emit();
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentFilterButtons.prototype, "onApplyFilter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentFilterButtons.prototype, "onClearFilter", void 0);
ComponentFilterButtons = __decorate([
    Component({
        selector: 'filter-buttons',
        templateUrl: 'buttons.html'
    })
], ComponentFilterButtons);
export { ComponentFilterButtons };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1dHRvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTTlELElBQWEsc0JBQXNCLEdBQW5DO0lBSkE7UUFPSSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBVXZDLENBQUM7SUFSRyxXQUFXO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDN0IsQ0FBQztDQUVKLENBQUE7QUFiRztJQURDLE1BQU0sRUFBRTs7NkRBQzBCO0FBR25DO0lBREMsTUFBTSxFQUFFOzs2REFDMEI7QUFOMUIsc0JBQXNCO0lBSmxDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsV0FBVyxFQUFFLGNBQWM7S0FDOUIsQ0FBQztHQUNXLHNCQUFzQixDQWdCbEM7U0FoQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZpbHRlci1idXR0b25zJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2J1dHRvbnMuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RmlsdGVyQnV0dG9ucyB7XG5cbiAgICBAT3V0cHV0KClcbiAgICBvbkFwcGx5RmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgb25DbGVhckZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGFwcGx5RmlsdGVyKCkge1xuICAgICAgICB0aGlzLm9uQXBwbHlGaWx0ZXIuZW1pdCgpXG4gICAgfVxuXG4gICAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgICAgIHRoaXMub25DbGVhckZpbHRlci5lbWl0KClcbiAgICB9XG5cbn1cbiJdfQ==