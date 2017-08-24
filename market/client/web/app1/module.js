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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBb0MvQyxJQUFhLGlCQUFpQixHQUE5QjtJQUNJLFlBQW9CLE1BQWMsRUFDZCxhQUE0QixFQUM1QixnQkFBa0MsRUFDbEMsYUFBNEI7UUFINUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2IsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksYUFBYSxDQUFDO2FBQ3ZDLFFBQVEsRUFBRTthQUNWLFNBQVMsQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQzNDLFFBQVE7WUFDSixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMvQyxDQUFDLENBQ0osQ0FBQTtJQUVMLENBQUM7Q0FDSixDQUFBO0FBakJZLGlCQUFpQjtJQWpDN0IsUUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsYUFBYTtZQUNiLFVBQVU7WUFDVixXQUFXO1NBQ2Q7UUFDRCxTQUFTLEVBQUU7WUFDUCxnQkFBZ0I7WUFDaEI7Z0JBQ0ksT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFVBQVUsRUFBRSxDQUFDLGdCQUFrQyxLQUFLLE1BQU0sZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2dCQUNuRixJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDeEIsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNELGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixhQUFhO1lBQ2IsYUFBYTtZQUNiLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsY0FBYztZQUNkO2dCQUNJLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU07YUFDdEM7U0FDSjtRQUNELFNBQVMsRUFBRTtZQUNQLE1BQU07WUFDTixlQUFlO1lBQ2YsZUFBZTtTQUNsQjtLQUNKLENBQUM7cUNBRThCLE1BQU07UUFDQyxhQUFhO1FBQ1YsZ0JBQWdCO1FBQ25CLGFBQWE7R0FKdkMsaUJBQWlCLENBaUI3QjtTQWpCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7TmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlc01vZHVsZX0gZnJvbSBcInBhZ2VzL21vZHVsZVwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcInBhZ2VzL2xheW91dC9sYXlvdXRcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge0NhdGVnb3J5UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0NvbnRyYWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvY29udHJhY3RcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVycy9wYXJhbWV0ZXJcIjtcclxuaW1wb3J0IHtQcm9kdWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvcHJvZHVjdFwiO1xyXG5pbXBvcnQge1NldHRpbmdzUHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtGb290ZXJDb21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IHtOYXZiYXJTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvbmF2YmFyXCI7XHJcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkVuZH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9nbG9iYWxcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJzU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvcGFyYW1ldGVyc1wiO1xyXG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyXCI7XHJcbmltcG9ydCB7U29ydGluZ1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3NvcnRcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuICAgICAgICBQYWdlc01vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFNldHRpbmdzUHJvdmlkZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChzZXR0aW5nc1Byb3ZpZGVyOiBTZXR0aW5nc1Byb3ZpZGVyKSA9PiAoKSA9PiBzZXR0aW5nc1Byb3ZpZGVyLmNvbmZpZygpLFxyXG4gICAgICAgICAgICBkZXBzOiBbU2V0dGluZ3NQcm92aWRlcl0sXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBDYXRlZ29yeVByb3ZpZGVyLFxyXG4gICAgICAgIENvbnRyYWN0UHJvdmlkZXIsXHJcbiAgICAgICAgUGFyYW1ldGVyUHJvdmlkZXIsXHJcbiAgICAgICAgUHJvZHVjdFByb3ZpZGVyLFxyXG4gICAgICAgIE5hdmJhclNlcnZpY2UsXHJcbiAgICAgICAgQ29uZmlnU2VydmljZSxcclxuICAgICAgICBHbG9iYWxTZXJ2aWNlLFxyXG4gICAgICAgIFBhcmFtZXRlcnNTZXJ2aWNlLFxyXG4gICAgICAgIFNvcnRpbmdTZXJ2aWNlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogJ1dpbmRvdycsIHVzZVZhbHVlOiB3aW5kb3dcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgTGF5b3V0LFxyXG4gICAgICAgIE5hdmJhckNvbXBvbmVudCxcclxuICAgICAgICBGb290ZXJDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZHVsZUFwcGxpY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbnRyYWN0UHJvdmlkZXI6IENvbnRyYWN0UHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcclxuICAgICAgICAgICAgLnBhaXJ3aXNlKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShzdGF0ZXMgPT4gZ2xvYmFsU2VydmljZS51cGRhdGVTdGF0ZShzdGF0ZXMpKTtcclxuICAgICAgICB0aGlzLmNvbnRyYWN0UHJvdmlkZXIuZ2V0Q2FydFN0YXR1cygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufSJdfQ==