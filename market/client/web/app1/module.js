var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import "rxjs/Rx";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { PagesModule } from "pages/module";
import { RootLayout } from "layouts/module";
import { BrowserModule } from "@angular/platform-browser";
import { CategoryProvider } from "providers";
import { HttpModule } from "@angular/http";
import { ContractProvider } from "providers";
import { ParameterProvider } from "providers";
import { ProductProvider } from "providers";
import { SettingsProvider } from "providers";
import { NavbarService } from "services/navbar";
import { ConfigService } from "services/config";
import { Router, NavigationEnd } from "@angular/router";
import { GlobalService } from "services/global";
import { ParametersService } from "./services/parameters";
import { SortingService } from "./services/sort";
import { LayoutsModule } from "./layouts/module";
let ApplicationModule = class ApplicationModule {
    constructor(router, globalService, contractProvider, navbarService) {
        this.router = router;
        this.globalService = globalService;
        this.contractProvider = contractProvider;
        this.navbarService = navbarService;
        this.router.events
            .filter(e => e instanceof NavigationEnd)
            .pairwise()
            .subscribe(states => globalService.updateState(states));
        this.contractProvider.getCartStatus().subscribe(response => {
            this.navbarService.updateCartData(response);
        });
    }
};
ApplicationModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            HttpModule,
            PagesModule,
            LayoutsModule
        ],
        providers: [
            SettingsProvider,
            {
                provide: APP_INITIALIZER,
                useFactory: (settingsProvider) => () => settingsProvider.config(),
                deps: [SettingsProvider],
                multi: true
            },
            CategoryProvider,
            ContractProvider,
            ParameterProvider,
            ProductProvider,
            NavbarService,
            ConfigService,
            GlobalService,
            ParametersService,
            SortingService,
            {
                provide: 'Window', useValue: window
            }
        ],
        exports: [
            RootLayout
        ]
    }),
    __metadata("design:paramtypes", [Router,
        GlobalService,
        ContractProvider,
        NavbarService])
], ApplicationModule);
export { ApplicationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzVDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQW1DL0MsSUFBYSxpQkFBaUIsR0FBOUI7SUFDSSxZQUFvQixNQUFjLEVBQ2QsYUFBNEIsRUFDNUIsZ0JBQWtDLEVBQ2xDLGFBQTRCO1FBSDVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNiLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLGFBQWEsQ0FBQzthQUN2QyxRQUFRLEVBQUU7YUFDVixTQUFTLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUMzQyxRQUFRO1lBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0MsQ0FBQyxDQUNKLENBQUE7SUFFTCxDQUFDO0NBQ0osQ0FBQTtBQWpCWSxpQkFBaUI7SUFoQzdCLFFBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLGFBQWE7WUFDYixVQUFVO1lBQ1YsV0FBVztZQUNYLGFBQWE7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxnQkFBZ0I7WUFDaEI7Z0JBQ0ksT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFVBQVUsRUFBRSxDQUFDLGdCQUFrQyxLQUFLLE1BQU0sZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2dCQUNuRixJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDeEIsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNELGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixhQUFhO1lBQ2IsYUFBYTtZQUNiLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsY0FBYztZQUNkO2dCQUNJLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU07YUFDdEM7U0FDSjtRQUNELE9BQU8sRUFBRTtZQUNMLFVBQVU7U0FDYjtLQUNKLENBQUM7cUNBRThCLE1BQU07UUFDQyxhQUFhO1FBQ1YsZ0JBQWdCO1FBQ25CLGFBQWE7R0FKdkMsaUJBQWlCLENBaUI3QjtTQWpCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7TmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlc01vZHVsZX0gZnJvbSBcInBhZ2VzL21vZHVsZVwiO1xyXG5pbXBvcnQge1Jvb3RMYXlvdXR9IGZyb20gXCJsYXlvdXRzL21vZHVsZVwiO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7Q2F0ZWdvcnlQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVyc1wiO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Q29udHJhY3RQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVyc1wiO1xyXG5pbXBvcnQge1BhcmFtZXRlclByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XHJcbmltcG9ydCB7UHJvZHVjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XHJcbmltcG9ydCB7U2V0dGluZ3NQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVyc1wiO1xyXG5pbXBvcnQge05hdmJhclNlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9uYXZiYXJcIjtcclxuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvY29uZmlnXCI7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRW5kfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL2dsb2JhbFwiO1xyXG5pbXBvcnQge1BhcmFtZXRlcnNTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9wYXJhbWV0ZXJzXCI7XHJcbmltcG9ydCB7U29ydGluZ1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3NvcnRcIjtcclxuaW1wb3J0IHtMYXlvdXRzTW9kdWxlfSBmcm9tIFwiLi9sYXlvdXRzL21vZHVsZVwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIFBhZ2VzTW9kdWxlLFxyXG4gICAgICAgIExheW91dHNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBTZXR0aW5nc1Byb3ZpZGVyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiAoc2V0dGluZ3NQcm92aWRlcjogU2V0dGluZ3NQcm92aWRlcikgPT4gKCkgPT4gc2V0dGluZ3NQcm92aWRlci5jb25maWcoKSxcclxuICAgICAgICAgICAgZGVwczogW1NldHRpbmdzUHJvdmlkZXJdLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ2F0ZWdvcnlQcm92aWRlcixcclxuICAgICAgICBDb250cmFjdFByb3ZpZGVyLFxyXG4gICAgICAgIFBhcmFtZXRlclByb3ZpZGVyLFxyXG4gICAgICAgIFByb2R1Y3RQcm92aWRlcixcclxuICAgICAgICBOYXZiYXJTZXJ2aWNlLFxyXG4gICAgICAgIENvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgR2xvYmFsU2VydmljZSxcclxuICAgICAgICBQYXJhbWV0ZXJzU2VydmljZSxcclxuICAgICAgICBTb3J0aW5nU2VydmljZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6ICdXaW5kb3cnLCB1c2VWYWx1ZTogd2luZG93XHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBSb290TGF5b3V0XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbk1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb250cmFjdFByb3ZpZGVyOiBDb250cmFjdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAgICAgICAuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXHJcbiAgICAgICAgICAgIC5wYWlyd2lzZSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoc3RhdGVzID0+IGdsb2JhbFNlcnZpY2UudXBkYXRlU3RhdGUoc3RhdGVzKSk7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdFByb3ZpZGVyLmdldENhcnRTdGF0dXMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2YmFyU2VydmljZS51cGRhdGVDYXJ0RGF0YShyZXNwb25zZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbn0iXX0=