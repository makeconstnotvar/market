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
import { SeoService } from "./services/seo1";
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
            SortingService,
            SeoService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxhQUFhLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3BJLE9BQU8sRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDeEcsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBaUMzQyxJQUFhLGlCQUFpQixHQUE5QjtJQUNJLFlBQW9CLE1BQWMsRUFDZCxhQUE0QixFQUM1QixnQkFBa0MsRUFDbEMsYUFBNEI7UUFINUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLGFBQWEsQ0FBQzthQUN2QyxRQUFRLEVBQUU7YUFDVixTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FDM0MsUUFBUSxDQUFDLEVBQUU7WUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMvQyxDQUFDLENBQ0osQ0FBQTtJQUVMLENBQUM7Q0FDSixDQUFBO0FBakJZLGlCQUFpQjtJQTlCN0IsUUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsYUFBYTtZQUNiLFVBQVU7WUFDVixXQUFXO1lBQ1gsYUFBYTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNQLGdCQUFnQjtZQUNoQjtnQkFDSSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsVUFBVSxFQUFFLGVBQWU7Z0JBQzNCLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUN4QixLQUFLLEVBQUUsSUFBSTthQUNkO1lBQ0QsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLGFBQWE7WUFDYixhQUFhO1lBQ2IsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsVUFBVTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsVUFBVTtTQUNiO0tBQ0osQ0FBQztxQ0FFOEIsTUFBTTtRQUNDLGFBQWE7UUFDVixnQkFBZ0I7UUFDbkIsYUFBYTtHQUp2QyxpQkFBaUIsQ0FpQjdCO1NBakJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE5nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtOYXZpZ2F0aW9uRW5kLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtQYWdlc01vZHVsZX0gZnJvbSBcInBhZ2VzL21vZHVsZVwiO1xyXG5pbXBvcnQge1Jvb3RMYXlvdXQsTGF5b3V0c01vZHVsZX0gZnJvbSBcImxheW91dHMvbW9kdWxlXCI7XHJcbmltcG9ydCB7Q2F0ZWdvcnlQcm92aWRlciwgQ29udHJhY3RQcm92aWRlciwgUGFyYW1ldGVyUHJvdmlkZXIsIFByb2R1Y3RQcm92aWRlciwgU2V0dGluZ3NQcm92aWRlciwgU2V0dGluZ3NGYWN0b3J5fSBmcm9tIFwicHJvdmlkZXJzXCI7XHJcbmltcG9ydCB7Q29uZmlnU2VydmljZSwgR2xvYmFsU2VydmljZSwgTmF2YmFyU2VydmljZSwgUGFyYW1ldGVyc1NlcnZpY2UsIFNvcnRpbmdTZXJ2aWNlfSBmcm9tIFwic2VydmljZXNcIjtcclxuaW1wb3J0IHtTZW9TZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZW8xXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsXHJcbiAgICAgICAgUGFnZXNNb2R1bGUsXHJcbiAgICAgICAgTGF5b3V0c01vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFNldHRpbmdzUHJvdmlkZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IFNldHRpbmdzRmFjdG9yeSxcclxuICAgICAgICAgICAgZGVwczogW1NldHRpbmdzUHJvdmlkZXJdLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ2F0ZWdvcnlQcm92aWRlcixcclxuICAgICAgICBDb250cmFjdFByb3ZpZGVyLFxyXG4gICAgICAgIFBhcmFtZXRlclByb3ZpZGVyLFxyXG4gICAgICAgIFByb2R1Y3RQcm92aWRlcixcclxuICAgICAgICBOYXZiYXJTZXJ2aWNlLFxyXG4gICAgICAgIENvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgR2xvYmFsU2VydmljZSxcclxuICAgICAgICBQYXJhbWV0ZXJzU2VydmljZSxcclxuICAgICAgICBTb3J0aW5nU2VydmljZSxcclxuICAgICAgICBTZW9TZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFJvb3RMYXlvdXRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbnRyYWN0UHJvdmlkZXI6IENvbnRyYWN0UHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcclxuICAgICAgICAgICAgLnBhaXJ3aXNlKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShzdGF0ZXMgPT4gZ2xvYmFsU2VydmljZS51cGRhdGVTdGF0ZShzdGF0ZXMpKTtcclxuICAgICAgICB0aGlzLmNvbnRyYWN0UHJvdmlkZXIuZ2V0Q2FydFN0YXR1cygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufSJdfQ==