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
import { SortingMode } from "models/sort";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvcnRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQU8sV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPN0MsSUFBYSx1QkFBdUIsR0FBcEM7SUFVSSxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKbEQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFpQjVCLGFBQVEsR0FBRyxXQUFXLENBQUM7SUFadkIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELFdBQVc7UUFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM1RCxDQUFDO0lBQ0wsQ0FBQztJQUlELE1BQU0sQ0FBQyxJQUFVLEVBQUUsSUFBaUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0osQ0FBQTtBQTNCRztJQURDLEtBQUssRUFBRTs7MkRBQ1c7QUFHbkI7SUFEQyxNQUFNLEVBQUU7O3VEQUNtQjtBQU5uQix1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQztRQUMxQixXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO3FDQVdzQyxjQUFjO0dBVnpDLHVCQUF1QixDQThCbkM7U0E5QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTb3J0LCBTb3J0aW5nTW9kZX0gZnJvbSBcIm1vZGVscy9zb3J0XCI7XHJcbmltcG9ydCB7U29ydGluZ1NlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9zb3J0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2F0LXNvcnRpbmcnLFxyXG4gICAgaG9zdDogeydjbGFzcyc6ICdzb3J0aW5nJ30sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NvcnRpbmcuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudENhdGFsb2dTb3J0aW5nIHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgYWN0aXZlU29ydDogc3RyaW5nO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25Tb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHNvcnRzOiBTb3J0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzb3J0aW5nU2VydmljZTogU29ydGluZ1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNvcnRzID0gdGhpcy5zb3J0aW5nU2VydmljZS5nZXRTb3J0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVNvcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0cyA9IHRoaXMuc29ydGluZ1NlcnZpY2UuY2hhbmdlKHRoaXMuYWN0aXZlU29ydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc29ydE1vZGUgPSBTb3J0aW5nTW9kZTtcclxuXHJcbiAgICBkb1NvcnQoc29ydDogU29ydCwgbW9kZTogU29ydGluZ01vZGUpIHtcclxuICAgICAgICB0aGlzLnNvcnRzID0gdGhpcy5zb3J0aW5nU2VydmljZS5kb1NvcnQoc29ydCwgbW9kZSk7XHJcblxyXG4gICAgICAgIHRoaXMub25Tb3J0LmVtaXQoKTtcclxuICAgIH1cclxufSJdfQ==