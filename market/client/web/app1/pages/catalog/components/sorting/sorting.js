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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvcnRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQU8sV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPN0MsSUFBYSx1QkFBdUIsR0FBcEM7SUFZSSxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFObEQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJNUIsYUFBUSxHQUFHLFdBQVcsQ0FBQztJQUd2QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsV0FBVztRQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzVELENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVUsRUFBRSxJQUFpQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSixDQUFBO0FBMUJHO0lBREMsS0FBSyxFQUFFOzsyREFDVztBQUduQjtJQURDLE1BQU0sRUFBRTs7dURBQ21CO0FBTm5CLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDO1FBQzFCLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7cUNBYXNDLGNBQWM7R0FaekMsdUJBQXVCLENBNkJuQztTQTdCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1NvcnQsIFNvcnRpbmdNb2RlfSBmcm9tIFwibW9kZWxzL3NvcnRcIjtcclxuaW1wb3J0IHtTb3J0aW5nU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL3NvcnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXQtc29ydGluZycsXHJcbiAgICBob3N0OiB7J2NsYXNzJzogJ3NvcnRpbmcnfSxcclxuICAgIHRlbXBsYXRlVXJsOiAnc29ydGluZy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q2F0YWxvZ1NvcnRpbmcge1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBhY3RpdmVTb3J0OiBzdHJpbmc7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgc29ydHM6IFNvcnRbXTtcclxuXHJcbiAgICBzb3J0TW9kZSA9IFNvcnRpbmdNb2RlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc29ydGluZ1NlcnZpY2U6IFNvcnRpbmdTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0cyA9IHRoaXMuc29ydGluZ1NlcnZpY2UuZ2V0U29ydHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVTb3J0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydHMgPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLmNoYW5nZSh0aGlzLmFjdGl2ZVNvcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvU29ydChzb3J0OiBTb3J0LCBtb2RlOiBTb3J0aW5nTW9kZSkge1xyXG4gICAgICAgIHRoaXMuc29ydHMgPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLmRvU29ydChzb3J0LCBtb2RlKTtcclxuICAgICAgICB0aGlzLm9uU29ydC5lbWl0KCk7XHJcbiAgICB9XHJcbn0iXX0=