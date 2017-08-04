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
let ComponentCatalogFilter = class ComponentCatalogFilter {
    constructor() {
        this.onFilterChange = new EventEmitter();
        this.onFilterApply = new EventEmitter();
        this.onFilterClear = new EventEmitter();
    }
    changeFilter(parameter) {
        this.onFilterChange.emit(parameter);
    }
    clearFilter() {
        this.onFilterClear.emit();
    }
    applyFilter() {
        this.onFilterApply.emit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], ComponentCatalogFilter.prototype, "parameters", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentCatalogFilter.prototype, "onFilterChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentCatalogFilter.prototype, "onFilterApply", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentCatalogFilter.prototype, "onFilterClear", void 0);
ComponentCatalogFilter = __decorate([
    Component({
        selector: 'cat-filter',
        templateUrl: 'filter.html'
    })
], ComponentCatalogFilter);
export { ComponentCatalogFilter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFRckUsSUFBYSxzQkFBc0IsR0FBbkM7SUFKQTtRQVVJLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdwQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBZXZDLENBQUM7SUFiRyxZQUFZLENBQUMsU0FBUztRQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7Q0FHSixDQUFBO0FBeEJHO0lBREMsS0FBSyxFQUFFOzswREFDZ0I7QUFHeEI7SUFEQyxNQUFNLEVBQUU7OzhEQUMyQjtBQUdwQztJQURDLE1BQU0sRUFBRTs7NkRBQzBCO0FBR25DO0lBREMsTUFBTSxFQUFFOzs2REFDMEI7QUFaMUIsc0JBQXNCO0lBSmxDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSxhQUFhO0tBQzdCLENBQUM7R0FDVyxzQkFBc0IsQ0EyQmxDO1NBM0JZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFyYW1ldGVyfSBmcm9tIFwiZW50aXRpZXMvcGFyYW1ldGVyXCI7XHJcbmltcG9ydCB7UGFyYW1ldGVyc1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9wYXJhbWV0ZXJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2F0LWZpbHRlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2ZpbHRlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q2F0YWxvZ0ZpbHRlciB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHBhcmFtZXRlcnM6IFBhcmFtZXRlcltdO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25GaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkZpbHRlckFwcGx5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25GaWx0ZXJDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjaGFuZ2VGaWx0ZXIocGFyYW1ldGVyKSB7XHJcbiAgICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZS5lbWl0KHBhcmFtZXRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGaWx0ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5vbkZpbHRlckNsZWFyLmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseUZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLm9uRmlsdGVyQXBwbHkuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19