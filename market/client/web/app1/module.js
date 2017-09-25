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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzVDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQW1DL0MsSUFBYSxpQkFBaUIsR0FBOUI7SUFDSSxZQUFvQixNQUFjLEVBQ2QsYUFBNEIsRUFDNUIsZ0JBQWtDLEVBQ2xDLGFBQTRCO1FBSDVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNiLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLGFBQWEsQ0FBQzthQUN2QyxRQUFRLEVBQUU7YUFDVixTQUFTLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUMzQyxRQUFRO1lBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0MsQ0FBQyxDQUNKLENBQUE7SUFFTCxDQUFDO0NBQ0osQ0FBQTtBQWpCWSxpQkFBaUI7SUFoQzdCLFFBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLGFBQWE7WUFDYixVQUFVO1lBQ1YsV0FBVztZQUNYLGFBQWE7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxnQkFBZ0I7WUFDaEI7Z0JBQ0ksT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFVBQVUsRUFBRSxDQUFDLGdCQUFrQyxLQUFLLE1BQU0sZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2dCQUNuRixJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDeEIsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNELGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixhQUFhO1lBQ2IsYUFBYTtZQUNiLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsY0FBYztZQUNkO2dCQUNJLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU07YUFDdEM7U0FDSjtRQUNELE9BQU8sRUFBRTtZQUNMLFVBQVU7U0FDYjtLQUNKLENBQUM7cUNBRThCLE1BQU07UUFDQyxhQUFhO1FBQ1YsZ0JBQWdCO1FBQ25CLGFBQWE7R0FKdkMsaUJBQWlCLENBaUI3QjtTQWpCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyeGpzL1J4XCI7XG5pbXBvcnQge05nTW9kdWxlLCBBUFBfSU5JVElBTElaRVJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2VzTW9kdWxlfSBmcm9tIFwicGFnZXMvbW9kdWxlXCI7XG5pbXBvcnQge1Jvb3RMYXlvdXR9IGZyb20gXCJsYXlvdXRzL21vZHVsZVwiO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHtDYXRlZ29yeVByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge0NvbnRyYWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnNcIjtcbmltcG9ydCB7UGFyYW1ldGVyUHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnNcIjtcbmltcG9ydCB7UHJvZHVjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XG5pbXBvcnQge1NldHRpbmdzUHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnNcIjtcbmltcG9ydCB7TmF2YmFyU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL25hdmJhclwiO1xuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvY29uZmlnXCI7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkVuZH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvZ2xvYmFsXCI7XG5pbXBvcnQge1BhcmFtZXRlcnNTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9wYXJhbWV0ZXJzXCI7XG5pbXBvcnQge1NvcnRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zb3J0XCI7XG5pbXBvcnQge0xheW91dHNNb2R1bGV9IGZyb20gXCIuL2xheW91dHMvbW9kdWxlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIFBhZ2VzTW9kdWxlLFxuICAgICAgICBMYXlvdXRzTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU2V0dGluZ3NQcm92aWRlcixcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgICAgdXNlRmFjdG9yeTogKHNldHRpbmdzUHJvdmlkZXI6IFNldHRpbmdzUHJvdmlkZXIpID0+ICgpID0+IHNldHRpbmdzUHJvdmlkZXIuY29uZmlnKCksXG4gICAgICAgICAgICBkZXBzOiBbU2V0dGluZ3NQcm92aWRlcl0sXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBDYXRlZ29yeVByb3ZpZGVyLFxuICAgICAgICBDb250cmFjdFByb3ZpZGVyLFxuICAgICAgICBQYXJhbWV0ZXJQcm92aWRlcixcbiAgICAgICAgUHJvZHVjdFByb3ZpZGVyLFxuICAgICAgICBOYXZiYXJTZXJ2aWNlLFxuICAgICAgICBDb25maWdTZXJ2aWNlLFxuICAgICAgICBHbG9iYWxTZXJ2aWNlLFxuICAgICAgICBQYXJhbWV0ZXJzU2VydmljZSxcbiAgICAgICAgU29ydGluZ1NlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6ICdXaW5kb3cnLCB1c2VWYWx1ZTogd2luZG93XG4gICAgICAgIH1cbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUm9vdExheW91dFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Nb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29udHJhY3RQcm92aWRlcjogQ29udHJhY3RQcm92aWRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UpIHtcblxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgICAgIC5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcbiAgICAgICAgICAgIC5wYWlyd2lzZSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHN0YXRlcyA9PiBnbG9iYWxTZXJ2aWNlLnVwZGF0ZVN0YXRlKHN0YXRlcykpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0UHJvdmlkZXIuZ2V0Q2FydFN0YXR1cygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmJhclNlcnZpY2UudXBkYXRlQ2FydERhdGEocmVzcG9uc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgIH1cbn0iXX0=