var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from "@angular/core";
import { SortingMode } from "./mode";
let ComponentCatalogSorting = class ComponentCatalogSorting {
    constructor() {
        this.onSort = new EventEmitter();
        this.sorts = [
            {
                name: 'по названию',
                field: 'name',
                mode: SortingMode.Asc,
                active: true
            },
            {
                name: 'по цене',
                field: 'price',
                mode: SortingMode.Desc,
                active: false
            }
        ];
        this.sortMode = SortingMode;
    }
    doSort(sort, mode) {
        let others = this.sorts.filter(s => s.field != sort.field);
        others.forEach(s => s.active = false);
        sort.active = true;
        sort.mode = mode;
        this.onSort.emit(sort);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentCatalogSorting.prototype, "onSort", void 0);
ComponentCatalogSorting = __decorate([
    Component({
        selector: 'cat-sorting',
        host: { 'class': 'sorting' },
        templateUrl: 'sorting.html'
    })
], ComponentCatalogSorting);
export { ComponentCatalogSorting };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvcnRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFRbkMsSUFBYSx1QkFBdUIsR0FBcEM7SUFMQTtRQVFJLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRWxDLFVBQUssR0FBVztZQUNaO2dCQUNJLElBQUksRUFBRSxhQUFhO2dCQUNuQixLQUFLLEVBQUUsTUFBTTtnQkFDYixJQUFJLEVBQUUsV0FBVyxDQUFDLEdBQUc7Z0JBQ3JCLE1BQU0sRUFBRSxJQUFJO2FBQ2Y7WUFDRDtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7Z0JBQ3RCLE1BQU0sRUFBRSxLQUFLO2FBQ2hCO1NBQ0osQ0FBQztRQUNGLGFBQVEsR0FBRyxXQUFXLENBQUM7SUFTM0IsQ0FBQztJQVBHLE1BQU0sQ0FBQyxJQUFVLEVBQUUsSUFBaUI7UUFDaEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNKLENBQUE7QUF6Qkc7SUFEQyxNQUFNLEVBQUU7O3VEQUN5QjtBQUh6Qix1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsSUFBSSxFQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQztRQUN4QixXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO0dBQ1csdUJBQXVCLENBNEJuQztTQTVCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U29ydGluZ01vZGV9IGZyb20gXCIuL21vZGVcIjtcclxuaW1wb3J0IHtTb3J0fSBmcm9tIFwiLi9zb3J0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2F0LXNvcnRpbmcnLFxyXG4gICAgaG9zdDp7J2NsYXNzJzonc29ydGluZyd9LFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzb3J0aW5nLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRDYXRhbG9nU29ydGluZyB7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPFNvcnQ+KCk7XHJcblxyXG4gICAgc29ydHM6IFNvcnRbXSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfQv9C+INC90LDQt9Cy0LDQvdC40Y4nLFxyXG4gICAgICAgICAgICBmaWVsZDogJ25hbWUnLFxyXG4gICAgICAgICAgICBtb2RlOiBTb3J0aW5nTW9kZS5Bc2MsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAn0L/QviDRhtC10L3QtScsXHJcbiAgICAgICAgICAgIGZpZWxkOiAncHJpY2UnLFxyXG4gICAgICAgICAgICBtb2RlOiBTb3J0aW5nTW9kZS5EZXNjLFxyXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIHNvcnRNb2RlID0gU29ydGluZ01vZGU7XHJcblxyXG4gICAgZG9Tb3J0KHNvcnQ6IFNvcnQsIG1vZGU6IFNvcnRpbmdNb2RlKSB7XHJcbiAgICAgICAgbGV0IG90aGVycyA9IHRoaXMuc29ydHMuZmlsdGVyKHMgPT4gcy5maWVsZCAhPSBzb3J0LmZpZWxkKTtcclxuICAgICAgICBvdGhlcnMuZm9yRWFjaChzID0+IHMuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgICAgIHNvcnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBzb3J0Lm1vZGUgPSBtb2RlO1xyXG4gICAgICAgIHRoaXMub25Tb3J0LmVtaXQoc29ydCk7XHJcbiAgICB9XHJcbn0iXX0=