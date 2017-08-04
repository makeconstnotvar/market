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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFvQzNELElBQWEsaUJBQWlCLEdBQTlCO0lBQ0ksWUFBb0IsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLGdCQUFrQyxFQUNsQyxhQUE0QjtRQUg1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUU1QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDYixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxhQUFhLENBQUM7YUFDdkMsUUFBUSxFQUFFO2FBQ1YsU0FBUyxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FDM0MsUUFBUTtZQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FDSixDQUFBO0lBRUwsQ0FBQztDQUNKLENBQUE7QUFqQlksaUJBQWlCO0lBakM3QixRQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxhQUFhO1lBQ2IsVUFBVTtZQUNWLFdBQVc7U0FDZDtRQUNELFNBQVMsRUFBRTtZQUNQLGdCQUFnQjtZQUNoQjtnQkFDSSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsVUFBVSxFQUFFLENBQUMsZ0JBQWtDLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25GLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUN4QixLQUFLLEVBQUUsSUFBSTthQUNkO1lBQ0QsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLGFBQWE7WUFDYixhQUFhO1lBQ2IsYUFBYTtZQUNiLGlCQUFpQjtZQUVqQjtnQkFDSSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNO2FBQ3RDO1NBQ0o7UUFDRCxTQUFTLEVBQUU7WUFDUCxNQUFNO1lBQ04sZUFBZTtZQUNmLGVBQWU7U0FDbEI7S0FDSixDQUFDO3FDQUU4QixNQUFNO1FBQ0MsYUFBYTtRQUNWLGdCQUFnQjtRQUNuQixhQUFhO0dBSnZDLGlCQUFpQixDQWlCN0I7U0FqQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge05nTW9kdWxlLCBBUFBfSU5JVElBTElaRVJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZXNNb2R1bGV9IGZyb20gXCJwYWdlcy9tb2R1bGVcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCJwYWdlcy9sYXlvdXQvbGF5b3V0XCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtDYXRlZ29yeVByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtDb250cmFjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL2NvbnRyYWN0XCI7XHJcbmltcG9ydCB7UGFyYW1ldGVyUHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvcGFyYW1ldGVyXCI7XHJcbmltcG9ydCB7UHJvZHVjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHtTZXR0aW5nc1Byb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tIFwiY29tcG9uZW50cy9mb290ZXIvZm9vdGVyXCI7XHJcbmltcG9ydCB7TmF2YmFyU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL25hdmJhclwiO1xyXG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9jb25maWdcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FbmR9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvZ2xvYmFsXCI7XHJcbmltcG9ydCB7UGFyYW1ldGVyc1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3BhcmFtZXRlcnNcIjtcclxuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIFBhZ2VzTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgU2V0dGluZ3NQcm92aWRlcixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgICAgdXNlRmFjdG9yeTogKHNldHRpbmdzUHJvdmlkZXI6IFNldHRpbmdzUHJvdmlkZXIpID0+ICgpID0+IHNldHRpbmdzUHJvdmlkZXIuY29uZmlnKCksXHJcbiAgICAgICAgICAgIGRlcHM6IFtTZXR0aW5nc1Byb3ZpZGVyXSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIENhdGVnb3J5UHJvdmlkZXIsXHJcbiAgICAgICAgQ29udHJhY3RQcm92aWRlcixcclxuICAgICAgICBQYXJhbWV0ZXJQcm92aWRlcixcclxuICAgICAgICBQcm9kdWN0UHJvdmlkZXIsXHJcbiAgICAgICAgTmF2YmFyU2VydmljZSxcclxuICAgICAgICBDb25maWdTZXJ2aWNlLFxyXG4gICAgICAgIEdsb2JhbFNlcnZpY2UsXHJcbiAgICAgICAgUGFyYW1ldGVyc1NlcnZpY2UsXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogJ1dpbmRvdycsIHVzZVZhbHVlOiB3aW5kb3dcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgTGF5b3V0LFxyXG4gICAgICAgIE5hdmJhckNvbXBvbmVudCxcclxuICAgICAgICBGb290ZXJDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZHVsZUFwcGxpY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbnRyYWN0UHJvdmlkZXI6IENvbnRyYWN0UHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcclxuICAgICAgICAgICAgLnBhaXJ3aXNlKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShzdGF0ZXMgPT4gZ2xvYmFsU2VydmljZS51cGRhdGVTdGF0ZShzdGF0ZXMpKTtcclxuICAgICAgICB0aGlzLmNvbnRyYWN0UHJvdmlkZXIuZ2V0Q2FydFN0YXR1cygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufSJdfQ==