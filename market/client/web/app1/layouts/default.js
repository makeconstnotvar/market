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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFpQjNDLElBQWEsYUFBYSxHQUExQjtJQUNJLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRXRELENBQUM7SUFJRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDckMsUUFBUTtZQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFBO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNKLENBQUE7QUFiWSxhQUFhO0lBYnpCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUM7UUFDekIsUUFBUSxFQUFFOzs7Ozs7OztLQVFUO0tBQ0osQ0FBQztxQ0FFd0MsZ0JBQWdCO0dBRDdDLGFBQWEsQ0FhekI7U0FiWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q2F0ZWdvcnlQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVyc1wiO1xyXG5pbXBvcnQge0NhdGVnb3J5fSBmcm9tIFwibW9kZWxzXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RlZmF1bHQnLFxyXG4gICAgaG9zdDogeydjbGFzcyc6ICdzdGlja3knfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN0aWNreS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxtYXJrZXQtbmF2YmFyPjwvbWFya2V0LW5hdmJhcj5cclxuICAgICAgICAgICAgPGp1bWJvdHJvbj48L2p1bWJvdHJvbj5cclxuICAgICAgICAgICAgPG1hcmtldC1tZW51IFtjYXRlZ29yaWVzXT1cImNhdGVnb3JpZXNcIj48L21hcmtldC1tZW51PlxyXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG1hcmtldC1mb290ZXI+PC9tYXJrZXQtZm9vdGVyPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdExheW91dCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGVnb3J5UHJvdmlkZXI6IENhdGVnb3J5UHJvdmlkZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5UHJvdmlkZXIuZ2V0VHJlZSgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=