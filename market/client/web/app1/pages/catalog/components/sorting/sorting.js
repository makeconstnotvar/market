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
import { SortingMode } from "entities/sort";
import { SortingService } from "services/sort";
let ComponentCatalogSorting = class ComponentCatalogSorting {
    constructor(sortingService) {
        this.sortingService = sortingService;
        this.onSort = new EventEmitter();
        this.sortMode = SortingMode;
    }
    ngOnInit() {
        this.sorts = this.sortingService.getSorts();
    }
    ngOnChanges() {
        if (this.activeSort) {
            this.sorts = this.sortingService.change(this.activeSort);
        }
    }
    doSort(sort, mode) {
        this.sorts = this.sortingService.doSort(sort, mode);
        this.onSort.emit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentCatalogSorting.prototype, "activeSort", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentCatalogSorting.prototype, "onSort", void 0);
ComponentCatalogSorting = __decorate([
    Component({
        selector: 'cat-sorting',
        host: { 'class': 'sorting' },
        templateUrl: 'sorting.html'
    }),
    __metadata("design:paramtypes", [SortingService])
], ComponentCatalogSorting);
export { ComponentCatalogSorting };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvcnRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQU8sV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPN0MsSUFBYSx1QkFBdUIsR0FBcEM7SUFVSSxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKbEQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFpQjVCLGFBQVEsR0FBRyxXQUFXLENBQUM7SUFadkIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELFdBQVc7UUFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM1RCxDQUFDO0lBQ0wsQ0FBQztJQUlELE1BQU0sQ0FBQyxJQUFVLEVBQUUsSUFBaUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0osQ0FBQTtBQTNCRztJQURDLEtBQUssRUFBRTs7MkRBQ1c7QUFHbkI7SUFEQyxNQUFNLEVBQUU7O3VEQUNtQjtBQU5uQix1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQztRQUMxQixXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO3FDQVdzQyxjQUFjO0dBVnpDLHVCQUF1QixDQThCbkM7U0E5QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTb3J0LCBTb3J0aW5nTW9kZX0gZnJvbSBcImVudGl0aWVzL3NvcnRcIjtcclxuaW1wb3J0IHtTb3J0aW5nU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL3NvcnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXQtc29ydGluZycsXHJcbiAgICBob3N0OiB7J2NsYXNzJzogJ3NvcnRpbmcnfSxcclxuICAgIHRlbXBsYXRlVXJsOiAnc29ydGluZy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q2F0YWxvZ1NvcnRpbmcge1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBhY3RpdmVTb3J0OiBzdHJpbmc7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgc29ydHM6IFNvcnRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNvcnRpbmdTZXJ2aWNlOiBTb3J0aW5nU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc29ydHMgPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLmdldFNvcnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU29ydCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvcnRzID0gdGhpcy5zb3J0aW5nU2VydmljZS5jaGFuZ2UodGhpcy5hY3RpdmVTb3J0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzb3J0TW9kZSA9IFNvcnRpbmdNb2RlO1xyXG5cclxuICAgIGRvU29ydChzb3J0OiBTb3J0LCBtb2RlOiBTb3J0aW5nTW9kZSkge1xyXG4gICAgICAgIHRoaXMuc29ydHMgPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLmRvU29ydChzb3J0LCBtb2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5vblNvcnQuZW1pdCgpO1xyXG4gICAgfVxyXG59Il19