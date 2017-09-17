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
        host: { 'class': 'product-menu' },
        templateUrl: 'filter.html'
    })
], ComponentCatalogFilter);
export { ComponentCatalogFilter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFTckUsSUFBYSxzQkFBc0IsR0FBbkM7SUFMQTtRQVdJLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdwQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBZXZDLENBQUM7SUFiRyxZQUFZLENBQUMsU0FBUztRQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7Q0FHSixDQUFBO0FBeEJHO0lBREMsS0FBSyxFQUFFOzswREFDZ0I7QUFHeEI7SUFEQyxNQUFNLEVBQUU7OzhEQUMyQjtBQUdwQztJQURDLE1BQU0sRUFBRTs7NkRBQzBCO0FBR25DO0lBREMsTUFBTSxFQUFFOzs2REFDMEI7QUFaMUIsc0JBQXNCO0lBTGxDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLElBQUksRUFBQyxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUM7UUFDN0IsV0FBVyxFQUFFLGFBQWE7S0FDN0IsQ0FBQztHQUNXLHNCQUFzQixDQTJCbEM7U0EzQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJ9IGZyb20gXCJtb2RlbHMvcGFyYW1ldGVyXCI7XHJcbmltcG9ydCB7UGFyYW1ldGVyc1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9wYXJhbWV0ZXJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2F0LWZpbHRlcicsXHJcbiAgICBob3N0OnsnY2xhc3MnOidwcm9kdWN0LW1lbnUnfSxcclxuICAgIHRlbXBsYXRlVXJsOiAnZmlsdGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRDYXRhbG9nRmlsdGVyIHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcGFyYW1ldGVyczogUGFyYW1ldGVyW107XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRmlsdGVyQXBwbHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkZpbHRlckNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNoYW5nZUZpbHRlcihwYXJhbWV0ZXIpIHtcclxuICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlLmVtaXQocGFyYW1ldGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLm9uRmlsdGVyQ2xlYXIuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5RmlsdGVyKCkge1xyXG4gICAgICAgIHRoaXMub25GaWx0ZXJBcHBseS5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=