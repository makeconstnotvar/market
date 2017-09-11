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
import { CategoryProvider } from "providers";
import { ActivatedRoute } from "@angular/router";
import { ConfigService } from "services/config";
let NotfoundPage = class NotfoundPage {
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
NotfoundPage = __decorate([
    Component({
        templateUrl: 'notfound.html'
    }),
    __param(3, Inject('Window')),
    __metadata("design:paramtypes", [CategoryProvider,
        ActivatedRoute,
        ConfigService, Object])
], NotfoundPage);
export { NotfoundPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ub3Rmb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2Utbm90Zm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFNOUMsSUFBYSxZQUFZLEdBQXpCO0lBT0ksWUFBb0IsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLGFBQTRCLEVBQ2xCLE1BQU07UUFIaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKaEQsZUFBVSxHQUFlLEVBQUUsQ0FBQztRQU14QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQ3JDLFFBQVE7WUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQTtRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQWM7WUFDaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hHLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUE7QUF4QlksWUFBWTtJQUh4QixTQUFTLENBQUM7UUFDUCxXQUFXLEVBQUUsZUFBZTtLQUMvQixDQUFDO0lBV2UsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7cUNBSFMsZ0JBQWdCO1FBQ2xCLGNBQWM7UUFDZixhQUFhO0dBVHZDLFlBQVksQ0F3QnhCO1NBeEJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q2F0ZWdvcnl9IGZyb20gXCJtb2RlbHMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHtDYXRlZ29yeVByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9jb25maWdcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnbm90Zm91bmQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGZvdW5kUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICByZXF1ZXN0VXJsOiBzdHJpbmc7XHJcbiAgICB3aW5kb3c7XHJcbiAgICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXRlZ29yeVByb3ZpZGVyOiBDYXRlZ29yeVByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KCdXaW5kb3cnKSB3aW5kb3cpIHtcclxuICAgICAgICB0aGlzLndpbmRvdyA9IHdpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5UHJvdmlkZXIuZ2V0VHJlZSgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9IHBhcmFtc1sndXJsJ107XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFVybCA9IGAke3RoaXMud2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnLmhvc3R9LyR7dGhpcy51cmx9YDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==