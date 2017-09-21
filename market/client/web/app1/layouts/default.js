var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { CategoryProvider } from "providers";
let DefaultLayout = class DefaultLayout {
    constructor(categoryProvider) {
        this.categoryProvider = categoryProvider;
    }
    ngOnInit() {
        this.categoryProvider.getTree().subscribe(response => {
            this.categories = response;
        });
    }
};
DefaultLayout = __decorate([
    Component({
        selector: 'default',
        host: { 'class': 'sticky' },
        template: `
        <div class="sticky-content">
            <market-navbar></market-navbar>
            <jumbotron></jumbotron>
            <market-menu [categories]="categories"></market-menu>
            <router-outlet></router-outlet>
        </div>
        <market-footer></market-footer>
    `
    }),
    __metadata("design:paramtypes", [CategoryProvider])
], DefaultLayout);
export { DefaultLayout };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFpQjNDLElBQWEsYUFBYSxHQUExQjtJQUNJLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRXRELENBQUM7SUFJRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDckMsUUFBUTtZQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFBO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNKLENBQUE7QUFiWSxhQUFhO0lBYnpCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUM7UUFDekIsUUFBUSxFQUFFOzs7Ozs7OztLQVFUO0tBQ0osQ0FBQztxQ0FFd0MsZ0JBQWdCO0dBRDdDLGFBQWEsQ0FhekI7U0FiWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NhdGVnb3J5UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnNcIjtcbmltcG9ydCB7Q2F0ZWdvcnl9IGZyb20gXCJtb2RlbHNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RlZmF1bHQnLFxuICAgIGhvc3Q6IHsnY2xhc3MnOiAnc3RpY2t5J30sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInN0aWNreS1jb250ZW50XCI+XG4gICAgICAgICAgICA8bWFya2V0LW5hdmJhcj48L21hcmtldC1uYXZiYXI+XG4gICAgICAgICAgICA8anVtYm90cm9uPjwvanVtYm90cm9uPlxuICAgICAgICAgICAgPG1hcmtldC1tZW51IFtjYXRlZ29yaWVzXT1cImNhdGVnb3JpZXNcIj48L21hcmtldC1tZW51PlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1hcmtldC1mb290ZXI+PC9tYXJrZXQtZm9vdGVyPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdExheW91dCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXRlZ29yeVByb3ZpZGVyOiBDYXRlZ29yeVByb3ZpZGVyKSB7XG5cbiAgICB9XG5cbiAgICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlQcm92aWRlci5nZXRUcmVlKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc3BvbnNlXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il19