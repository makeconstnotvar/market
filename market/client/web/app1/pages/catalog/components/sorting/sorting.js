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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvcnRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQU8sV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPN0MsSUFBYSx1QkFBdUIsR0FBcEM7SUFVSSxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKbEQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFpQjVCLGFBQVEsR0FBRyxXQUFXLENBQUM7SUFadkIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELFdBQVc7UUFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM1RCxDQUFDO0lBQ0wsQ0FBQztJQUlELE1BQU0sQ0FBQyxJQUFVLEVBQUUsSUFBaUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0osQ0FBQTtBQTNCRztJQURDLEtBQUssRUFBRTs7MkRBQ1c7QUFHbkI7SUFEQyxNQUFNLEVBQUU7O3VEQUNtQjtBQU5uQix1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQztRQUMxQixXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO3FDQVdzQyxjQUFjO0dBVnpDLHVCQUF1QixDQThCbkM7U0E5QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U29ydCwgU29ydGluZ01vZGV9IGZyb20gXCJlbnRpdGllcy9zb3J0XCI7XG5pbXBvcnQge1NvcnRpbmdTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvc29ydFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NhdC1zb3J0aW5nJyxcbiAgICBob3N0OiB7J2NsYXNzJzogJ3NvcnRpbmcnfSxcbiAgICB0ZW1wbGF0ZVVybDogJ3NvcnRpbmcuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q2F0YWxvZ1NvcnRpbmcge1xuXG4gICAgQElucHV0KClcbiAgICBhY3RpdmVTb3J0OiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KClcbiAgICBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBzb3J0czogU29ydFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzb3J0aW5nU2VydmljZTogU29ydGluZ1NlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zb3J0cyA9IHRoaXMuc29ydGluZ1NlcnZpY2UuZ2V0U29ydHMoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU29ydCkge1xuICAgICAgICAgICAgdGhpcy5zb3J0cyA9IHRoaXMuc29ydGluZ1NlcnZpY2UuY2hhbmdlKHRoaXMuYWN0aXZlU29ydClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRNb2RlID0gU29ydGluZ01vZGU7XG5cbiAgICBkb1NvcnQoc29ydDogU29ydCwgbW9kZTogU29ydGluZ01vZGUpIHtcbiAgICAgICAgdGhpcy5zb3J0cyA9IHRoaXMuc29ydGluZ1NlcnZpY2UuZG9Tb3J0KHNvcnQsIG1vZGUpO1xuXG4gICAgICAgIHRoaXMub25Tb3J0LmVtaXQoKTtcbiAgICB9XG59Il19