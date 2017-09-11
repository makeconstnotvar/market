var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { NavbarItem } from "models";
let NavbarItemComponent = class NavbarItemComponent {
};
__decorate([
    Input(),
    __metadata("design:type", NavbarItem)
], NavbarItemComponent.prototype, "data", void 0);
NavbarItemComponent = __decorate([
    Component({
        selector: 'navbar-item',
        templateUrl: 'navbar-item.html'
    })
], NavbarItemComponent);
export { NavbarItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZiYXItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBS25DLElBQWEsbUJBQW1CLEdBQWhDO0NBSUMsQ0FBQTtBQUZHO0lBREMsS0FBSyxFQUFFOzhCQUNGLFVBQVU7aURBQUM7QUFGUixtQkFBbUI7SUFKL0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLGtCQUFrQjtLQUNsQyxDQUFDO0dBQ1csbUJBQW1CLENBSS9CO1NBSlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXZiYXJJdGVtfSBmcm9tIFwibW9kZWxzXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduYXZiYXItaXRlbScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ25hdmJhci1pdGVtLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZiYXJJdGVtQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBkYXRhOiBOYXZiYXJJdGVtO1xyXG5cclxufSJdfQ==