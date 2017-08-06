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
        host: { 'class': 'row block' },
        templateUrl: 'buttons.html'
    })
], ComponentFilterButtons);
export { ComponentFilterButtons };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1dHRvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTzlELElBQWEsc0JBQXNCLEdBQW5DO0lBTEE7UUFRSSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBVXZDLENBQUM7SUFSRyxXQUFXO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDN0IsQ0FBQztDQUVKLENBQUE7QUFiRztJQURDLE1BQU0sRUFBRTs7NkRBQzBCO0FBR25DO0lBREMsTUFBTSxFQUFFOzs2REFDMEI7QUFOMUIsc0JBQXNCO0lBTGxDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQztRQUM1QixXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO0dBQ1csc0JBQXNCLENBZ0JsQztTQWhCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmlsdGVyLWJ1dHRvbnMnLFxyXG4gICAgaG9zdDogeydjbGFzcyc6ICdyb3cgYmxvY2snfSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYnV0dG9ucy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RmlsdGVyQnV0dG9ucyB7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkFwcGx5RmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25DbGVhckZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBhcHBseUZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLm9uQXBwbHlGaWx0ZXIuZW1pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGaWx0ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5vbkNsZWFyRmlsdGVyLmVtaXQoKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=