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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvcnRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQU8sV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPN0MsSUFBYSx1QkFBdUIsR0FBcEM7SUFZSSxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFObEQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJNUIsYUFBUSxHQUFHLFdBQVcsQ0FBQztJQUd2QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsV0FBVztRQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzVELENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVUsRUFBRSxJQUFpQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSixDQUFBO0FBMUJHO0lBREMsS0FBSyxFQUFFOzsyREFDVztBQUduQjtJQURDLE1BQU0sRUFBRTs7dURBQ21CO0FBTm5CLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDO1FBQzFCLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7cUNBYXNDLGNBQWM7R0FaekMsdUJBQXVCLENBNkJuQztTQTdCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtTb3J0LCBTb3J0aW5nTW9kZX0gZnJvbSBcIm1vZGVscy9zb3J0XCI7XG5pbXBvcnQge1NvcnRpbmdTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvc29ydFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NhdC1zb3J0aW5nJyxcbiAgICBob3N0OiB7J2NsYXNzJzogJ3NvcnRpbmcnfSxcbiAgICB0ZW1wbGF0ZVVybDogJ3NvcnRpbmcuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q2F0YWxvZ1NvcnRpbmcge1xuXG4gICAgQElucHV0KClcbiAgICBhY3RpdmVTb3J0OiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KClcbiAgICBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBzb3J0czogU29ydFtdO1xuXG4gICAgc29ydE1vZGUgPSBTb3J0aW5nTW9kZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc29ydGluZ1NlcnZpY2U6IFNvcnRpbmdTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc29ydHMgPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLmdldFNvcnRzKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVNvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydHMgPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLmNoYW5nZSh0aGlzLmFjdGl2ZVNvcnQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb1NvcnQoc29ydDogU29ydCwgbW9kZTogU29ydGluZ01vZGUpIHtcbiAgICAgICAgdGhpcy5zb3J0cyA9IHRoaXMuc29ydGluZ1NlcnZpY2UuZG9Tb3J0KHNvcnQsIG1vZGUpO1xuICAgICAgICB0aGlzLm9uU29ydC5lbWl0KCk7XG4gICAgfVxufSJdfQ==