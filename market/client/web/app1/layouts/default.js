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
        template: `
        <market-navbar></market-navbar>
        <jumbotron></jumbotron>
        <market-menu [categories]="categories"></market-menu>
        <router-outlet></router-outlet>
        <market-footer></market-footer>
    `
    }),
    __metadata("design:paramtypes", [CategoryProvider])
], DefaultLayout);
export { DefaultLayout };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFlM0MsSUFBYSxhQUFhLEdBQTFCO0lBQ0ksWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFdEQsQ0FBQztJQUlELFFBQVE7UUFDSixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNyQyxRQUFRO1lBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0NBQ0osQ0FBQTtBQWJZLGFBQWE7SUFYekIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFFbkIsUUFBUSxFQUFFOzs7Ozs7S0FNVDtLQUNKLENBQUM7cUNBRXdDLGdCQUFnQjtHQUQ3QyxhQUFhLENBYXpCO1NBYlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NhdGVnb3J5UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnNcIjtcclxuaW1wb3J0IHtDYXRlZ29yeX0gZnJvbSBcIm1vZGVsc1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkZWZhdWx0JyxcclxuXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxtYXJrZXQtbmF2YmFyPjwvbWFya2V0LW5hdmJhcj5cclxuICAgICAgICA8anVtYm90cm9uPjwvanVtYm90cm9uPlxyXG4gICAgICAgIDxtYXJrZXQtbWVudSBbY2F0ZWdvcmllc109XCJjYXRlZ29yaWVzXCI+PC9tYXJrZXQtbWVudT5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPG1hcmtldC1mb290ZXI+PC9tYXJrZXQtZm9vdGVyPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdExheW91dCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGVnb3J5UHJvdmlkZXI6IENhdGVnb3J5UHJvdmlkZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5UHJvdmlkZXIuZ2V0VHJlZSgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=