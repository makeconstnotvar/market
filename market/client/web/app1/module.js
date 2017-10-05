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
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { NavigationEnd, Router } from "@angular/router";
import { PagesModule } from "pages/module";
import { RootLayout, LayoutsModule } from "layouts/module";
import { CategoryProvider, ContractProvider, ParameterProvider, ProductProvider, SettingsProvider, SettingsFactory } from "providers";
import { ConfigService, GlobalService, NavbarService, ParametersService, SortingService } from "services";
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
                useFactory: SettingsFactory,
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
            SortingService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxhQUFhLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3BJLE9BQU8sRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFnQ3hHLElBQWEsaUJBQWlCLEdBQTlCO0lBQ0ksWUFBb0IsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLGdCQUFrQyxFQUNsQyxhQUE0QjtRQUg1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUU1QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDYixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxhQUFhLENBQUM7YUFDdkMsUUFBUSxFQUFFO2FBQ1YsU0FBUyxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FDM0MsUUFBUTtZQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FDSixDQUFBO0lBRUwsQ0FBQztDQUNKLENBQUE7QUFqQlksaUJBQWlCO0lBN0I3QixRQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxhQUFhO1lBQ2IsVUFBVTtZQUNWLFdBQVc7WUFDWCxhQUFhO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsZ0JBQWdCO1lBQ2hCO2dCQUNJLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixVQUFVLEVBQUUsZUFBZTtnQkFDM0IsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJO2FBQ2Q7WUFDRCxnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YsYUFBYTtZQUNiLGFBQWE7WUFDYixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGNBQWM7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDTCxVQUFVO1NBQ2I7S0FDSixDQUFDO3FDQUU4QixNQUFNO1FBQ0MsYUFBYTtRQUNWLGdCQUFnQjtRQUNuQixhQUFhO0dBSnZDLGlCQUFpQixDQWlCN0I7U0FqQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgTmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge05hdmlnYXRpb25FbmQsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1BhZ2VzTW9kdWxlfSBmcm9tIFwicGFnZXMvbW9kdWxlXCI7XHJcbmltcG9ydCB7Um9vdExheW91dCxMYXlvdXRzTW9kdWxlfSBmcm9tIFwibGF5b3V0cy9tb2R1bGVcIjtcclxuaW1wb3J0IHtDYXRlZ29yeVByb3ZpZGVyLCBDb250cmFjdFByb3ZpZGVyLCBQYXJhbWV0ZXJQcm92aWRlciwgUHJvZHVjdFByb3ZpZGVyLCBTZXR0aW5nc1Byb3ZpZGVyLCBTZXR0aW5nc0ZhY3Rvcnl9IGZyb20gXCJwcm92aWRlcnNcIjtcclxuaW1wb3J0IHtDb25maWdTZXJ2aWNlLCBHbG9iYWxTZXJ2aWNlLCBOYXZiYXJTZXJ2aWNlLCBQYXJhbWV0ZXJzU2VydmljZSwgU29ydGluZ1NlcnZpY2V9IGZyb20gXCJzZXJ2aWNlc1wiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIFBhZ2VzTW9kdWxlLFxyXG4gICAgICAgIExheW91dHNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBTZXR0aW5nc1Byb3ZpZGVyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiBTZXR0aW5nc0ZhY3RvcnksXHJcbiAgICAgICAgICAgIGRlcHM6IFtTZXR0aW5nc1Byb3ZpZGVyXSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIENhdGVnb3J5UHJvdmlkZXIsXHJcbiAgICAgICAgQ29udHJhY3RQcm92aWRlcixcclxuICAgICAgICBQYXJhbWV0ZXJQcm92aWRlcixcclxuICAgICAgICBQcm9kdWN0UHJvdmlkZXIsXHJcbiAgICAgICAgTmF2YmFyU2VydmljZSxcclxuICAgICAgICBDb25maWdTZXJ2aWNlLFxyXG4gICAgICAgIEdsb2JhbFNlcnZpY2UsXHJcbiAgICAgICAgUGFyYW1ldGVyc1NlcnZpY2UsXHJcbiAgICAgICAgU29ydGluZ1NlcnZpY2VcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgUm9vdExheW91dFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Nb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29udHJhY3RQcm92aWRlcjogQ29udHJhY3RQcm92aWRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgbmF2YmFyU2VydmljZTogTmF2YmFyU2VydmljZSkge1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAgICAgLmZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxyXG4gICAgICAgICAgICAucGFpcndpc2UoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHN0YXRlcyA9PiBnbG9iYWxTZXJ2aWNlLnVwZGF0ZVN0YXRlKHN0YXRlcykpO1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5nZXRDYXJ0U3RhdHVzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmJhclNlcnZpY2UudXBkYXRlQ2FydERhdGEocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG59Il19