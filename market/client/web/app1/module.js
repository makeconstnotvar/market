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
import { Layout } from "pages/layout/layout";
import { BrowserModule } from "@angular/platform-browser";
import { CategoryProvider } from "providers/category";
import { HttpModule } from "@angular/http";
import { ContractProvider } from "providers/contract";
import { ParameterProvider } from "providers/parameter";
import { ProductProvider } from "providers/product";
import { SettingsProvider } from "providers/settings";
import { FooterComponent } from "components/footer/footer";
import { NavbarService } from "services/navbar";
import { ConfigService } from "services/config";
import { Router, NavigationEnd } from "@angular/router";
import { GlobalService } from "services/global";
import { ParametersService } from "./services/parameters";
import { NavbarComponent } from "./components/navbar/navbar";
import { SortingService } from "./services/sort";
let ModuleApplication = class ModuleApplication {
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
ModuleApplication = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            HttpModule,
            PagesModule
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
        bootstrap: [
            Layout,
            NavbarComponent,
            FooterComponent
        ]
    }),
    __metadata("design:paramtypes", [Router,
        GlobalService,
        ContractProvider,
        NavbarService])
], ModuleApplication);
export { ModuleApplication };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBb0MvQyxJQUFhLGlCQUFpQixHQUE5QjtJQUNJLFlBQW9CLE1BQWMsRUFDZCxhQUE0QixFQUM1QixnQkFBa0MsRUFDbEMsYUFBNEI7UUFINUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2IsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksYUFBYSxDQUFDO2FBQ3ZDLFFBQVEsRUFBRTthQUNWLFNBQVMsQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQzNDLFFBQVE7WUFDSixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMvQyxDQUFDLENBQ0osQ0FBQTtJQUVMLENBQUM7Q0FDSixDQUFBO0FBakJZLGlCQUFpQjtJQWpDN0IsUUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsYUFBYTtZQUNiLFVBQVU7WUFDVixXQUFXO1NBQ2Q7UUFDRCxTQUFTLEVBQUU7WUFDUCxnQkFBZ0I7WUFDaEI7Z0JBQ0ksT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFVBQVUsRUFBRSxDQUFDLGdCQUFrQyxLQUFLLE1BQU0sZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2dCQUNuRixJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDeEIsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNELGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixhQUFhO1lBQ2IsYUFBYTtZQUNiLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsY0FBYztZQUNkO2dCQUNJLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU07YUFDdEM7U0FDSjtRQUNELFNBQVMsRUFBRTtZQUNQLE1BQU07WUFDTixlQUFlO1lBQ2YsZUFBZTtTQUNsQjtLQUNKLENBQUM7cUNBRThCLE1BQU07UUFDQyxhQUFhO1FBQ1YsZ0JBQWdCO1FBQ25CLGFBQWE7R0FKdkMsaUJBQWlCLENBaUI3QjtTQWpCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyeGpzL1J4XCI7XG5pbXBvcnQge05nTW9kdWxlLCBBUFBfSU5JVElBTElaRVJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2VzTW9kdWxlfSBmcm9tIFwicGFnZXMvbW9kdWxlXCI7XG5pbXBvcnQge0xheW91dH0gZnJvbSBcInBhZ2VzL2xheW91dC9sYXlvdXRcIjtcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7Q2F0ZWdvcnlQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVycy9jYXRlZ29yeVwiO1xuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtDb250cmFjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL2NvbnRyYWN0XCI7XG5pbXBvcnQge1BhcmFtZXRlclByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL3BhcmFtZXRlclwiO1xuaW1wb3J0IHtQcm9kdWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvcHJvZHVjdFwiO1xuaW1wb3J0IHtTZXR0aW5nc1Byb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL3NldHRpbmdzXCI7XG5pbXBvcnQge0Zvb3RlckNvbXBvbmVudH0gZnJvbSBcImNvbXBvbmVudHMvZm9vdGVyL2Zvb3RlclwiO1xuaW1wb3J0IHtOYXZiYXJTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvbmF2YmFyXCI7XG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9jb25maWdcIjtcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRW5kfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9nbG9iYWxcIjtcbmltcG9ydCB7UGFyYW1ldGVyc1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3BhcmFtZXRlcnNcIjtcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXJcIjtcbmltcG9ydCB7U29ydGluZ1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3NvcnRcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgUGFnZXNNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBTZXR0aW5nc1Byb3ZpZGVyLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiAoc2V0dGluZ3NQcm92aWRlcjogU2V0dGluZ3NQcm92aWRlcikgPT4gKCkgPT4gc2V0dGluZ3NQcm92aWRlci5jb25maWcoKSxcbiAgICAgICAgICAgIGRlcHM6IFtTZXR0aW5nc1Byb3ZpZGVyXSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIENhdGVnb3J5UHJvdmlkZXIsXG4gICAgICAgIENvbnRyYWN0UHJvdmlkZXIsXG4gICAgICAgIFBhcmFtZXRlclByb3ZpZGVyLFxuICAgICAgICBQcm9kdWN0UHJvdmlkZXIsXG4gICAgICAgIE5hdmJhclNlcnZpY2UsXG4gICAgICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgICAgIEdsb2JhbFNlcnZpY2UsXG4gICAgICAgIFBhcmFtZXRlcnNTZXJ2aWNlLFxuICAgICAgICBTb3J0aW5nU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogJ1dpbmRvdycsIHVzZVZhbHVlOiB3aW5kb3dcbiAgICAgICAgfVxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIExheW91dCxcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxuICAgICAgICBGb290ZXJDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1vZHVsZUFwcGxpY2F0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbnRyYWN0UHJvdmlkZXI6IENvbnRyYWN0UHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgICAgICAuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgICAgICAgICAucGFpcndpc2UoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShzdGF0ZXMgPT4gZ2xvYmFsU2VydmljZS51cGRhdGVTdGF0ZShzdGF0ZXMpKTtcbiAgICAgICAgdGhpcy5jb250cmFjdFByb3ZpZGVyLmdldENhcnRTdGF0dXMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICB9XG59Il19