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
import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { CategoryProvider } from "providers";
import { ActivatedRoute } from "@angular/router";
import { ConfigService } from "services/config";
import { isPlatformBrowser } from "@angular/common";
let NotfoundPage = class NotfoundPage {
    constructor(platformId, categoryProvider, activatedRoute, configService) {
        this.platformId = platformId;
        this.categoryProvider = categoryProvider;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.categories = [];
        if (isPlatformBrowser(this.platformId)) {
            this._window = window;
        }
    }
    ngOnInit() {
        this.categoryProvider.getTree().subscribe(response => {
            this.categories = response;
        });
        if (isPlatformBrowser(this.platformId)) {
            this.activatedRoute.params.subscribe((params) => {
                this.url = params['url'];
                this.requestUrl = `${this._window.location.protocol}//${this.configService.config.host}/${this.url}`;
            });
        }
    }
};
NotfoundPage = __decorate([
    Component({
        templateUrl: 'notfound.html'
    }),
    __param(0, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [Object,
        CategoryProvider,
        ActivatedRoute,
        ConfigService])
], NotfoundPage);
export { NotfoundPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ub3Rmb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2Utbm90Zm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUMsY0FBYyxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBS2xELElBQWEsWUFBWSxHQUF6QjtJQU9JLFlBQXlDLFVBQWtCLEVBQ3ZDLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixhQUE0QjtRQUhQLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFMaEQsZUFBVSxHQUFlLEVBQUUsQ0FBQztRQU14QixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQ3JDLFFBQVE7WUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQTtRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNQLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBYztnQkFDaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN6RyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQTVCWSxZQUFZO0lBSHhCLFNBQVMsQ0FBQztRQUNQLFdBQVcsRUFBRSxlQUFlO0tBQy9CLENBQUM7SUFRZSxXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtxQ0FBcUIsTUFBTTtRQUNyQixnQkFBZ0I7UUFDbEIsY0FBYztRQUNmLGFBQWE7R0FWdkMsWUFBWSxDQTRCeEI7U0E1QlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIFBMQVRGT1JNX0lEfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NhdGVnb3J5fSBmcm9tIFwibW9kZWxzL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7Q2F0ZWdvcnlQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVyc1wiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvY29uZmlnXCI7XHJcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdub3Rmb3VuZC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90Zm91bmRQYWdlIHtcclxuXHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHJlcXVlc3RVcmw6IHN0cmluZztcclxuICAgIF93aW5kb3c6IGFueTtcclxuICAgIGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY2F0ZWdvcnlQcm92aWRlcjogQ2F0ZWdvcnlQcm92aWRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93ID0gd2luZG93O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5UHJvdmlkZXIuZ2V0VHJlZSgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cmwgPSBwYXJhbXNbJ3VybCddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXJsID0gYCR7dGhpcy5fd2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnLmhvc3R9LyR7dGhpcy51cmx9YDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19