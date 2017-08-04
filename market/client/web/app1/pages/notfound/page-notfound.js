var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from "@angular/core";
import { CategoryProvider } from "providers/category";
import { ActivatedRoute } from "@angular/router";
import { ConfigService } from "services/config";
let PageNotfound = class PageNotfound {
    constructor(categoryProvider, activatedRoute, configService, window) {
        this.categoryProvider = categoryProvider;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.categories = [];
        this.window = window;
    }
    ngOnInit() {
        this.categoryProvider.getTree().subscribe(response => {
            this.categories = response;
        });
        this.activatedRoute.params.subscribe((params) => {
            this.url = params['url'];
            this.requestUrl = `${this.window.location.protocol}//${this.configService.config.host}/${this.url}`;
        });
    }
};
PageNotfound = __decorate([
    Component({
        templateUrl: 'notfound.html'
    }),
    __param(3, Inject('Window')),
    __metadata("design:paramtypes", [CategoryProvider,
        ActivatedRoute,
        ConfigService, Object])
], PageNotfound);
export { PageNotfound };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ub3Rmb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2Utbm90Zm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFDLGNBQWMsRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQU05QyxJQUFhLFlBQVksR0FBekI7SUFPSSxZQUFvQixnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsYUFBNEIsRUFDbEIsTUFBTTtRQUhoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUpoRCxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBTXhCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDckMsUUFBUTtZQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFBO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBYztZQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEcsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQTtBQXhCWSxZQUFZO0lBSHhCLFNBQVMsQ0FBQztRQUNQLFdBQVcsRUFBRSxlQUFlO0tBQy9CLENBQUM7SUFXZSxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQ0FIUyxnQkFBZ0I7UUFDbEIsY0FBYztRQUNmLGFBQWE7R0FUdkMsWUFBWSxDQXdCeEI7U0F4QlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDYXRlZ29yeX0gZnJvbSBcImVudGl0aWVzL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7Q2F0ZWdvcnlQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVycy9jYXRlZ29yeVwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvY29uZmlnXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ25vdGZvdW5kLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlTm90Zm91bmQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgcmVxdWVzdFVybDogc3RyaW5nO1xyXG4gICAgd2luZG93O1xyXG4gICAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2F0ZWdvcnlQcm92aWRlcjogQ2F0ZWdvcnlQcm92aWRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdCgnV2luZG93Jykgd2luZG93KSB7XHJcbiAgICAgICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeVByb3ZpZGVyLmdldFRyZWUoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cmwgPSBwYXJhbXNbJ3VybCddO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RVcmwgPSBgJHt0aGlzLndpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7dGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZy5ob3N0fS8ke3RoaXMudXJsfWA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=