var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer";
import { JumbotronComponent } from "./jumbotron/jumbotron";
import { JumboComponent } from "./jumbotron/components/jumbo";
import { MapsComponent } from "./maps/maps";
import { MenuComponent } from "./menu/menu";
import { PriceComponent } from "./price/price";
import { ProgressComponent } from "./progress/progress";
import { PagerComponent } from "./pager/pager";
import { NavbarComponent } from "./navbar/navbar";
import { NavbarItemComponent } from "./navbar/components/navbar-item/navbar-item";
import { NavbarCartComponent } from "./navbar/components/navbar-cart/navbar-cart";
import { NavbarBrandComponent } from "./navbar/components/navbar-brand/navbar-brand";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
let ModuleComponents = class ModuleComponents {
};
ModuleComponents = __decorate([
    NgModule({
        declarations: [
            FooterComponent,
            JumbotronComponent,
            JumboComponent,
            MapsComponent,
            MenuComponent,
            NavbarComponent,
            NavbarItemComponent,
            NavbarCartComponent,
            NavbarBrandComponent,
            PagerComponent,
            ProgressComponent,
            PriceComponent
        ],
        imports: [
            BrowserModule,
            RouterModule
        ],
        providers: [],
        exports: [
            FooterComponent,
            JumboComponent, JumbotronComponent,
            MapsComponent,
            MenuComponent,
            NavbarComponent,
            PagerComponent,
            ProgressComponent,
            PriceComponent
        ]
    })
], ModuleComponents);
export { ModuleComponents };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNuRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBZ0N4RCxJQUFhLGdCQUFnQixHQUE3QjtDQUVDLENBQUE7QUFGWSxnQkFBZ0I7SUEvQjVCLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGFBQWE7WUFDYixhQUFhO1lBQ2IsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsY0FBYztTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNKLGFBQWE7WUFDWixZQUFZO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUU7WUFDTCxlQUFlO1lBQ2YsY0FBYyxFQUFDLGtCQUFrQjtZQUNqQyxhQUFhO1lBQ2IsYUFBYTtZQUNiLGVBQWU7WUFDZixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLGNBQWM7U0FDakI7S0FDSixDQUFDO0dBQ1csZ0JBQWdCLENBRTVCO1NBRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtGb290ZXJDb21wb25lbnR9IGZyb20gXCIuL2Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IHtKdW1ib3Ryb25Db21wb25lbnR9IGZyb20gXCIuL2p1bWJvdHJvbi9qdW1ib3Ryb25cIjtcclxuaW1wb3J0IHtKdW1ib0NvbXBvbmVudH0gZnJvbSBcIi4vanVtYm90cm9uL2NvbXBvbmVudHMvanVtYm9cIjtcclxuaW1wb3J0IHtNYXBzQ29tcG9uZW50fSBmcm9tIFwiLi9tYXBzL21hcHNcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9tZW51L21lbnVcIjtcclxuaW1wb3J0IHtQcmljZUNvbXBvbmVudH0gZnJvbSBcIi4vcHJpY2UvcHJpY2VcIjtcclxuaW1wb3J0IHtQcm9ncmVzc0NvbXBvbmVudH0gZnJvbSBcIi4vcHJvZ3Jlc3MvcHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHtQYWdlckNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXIvcGFnZXJcIjtcclxuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gXCIuL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IHtOYXZiYXJJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9uYXZiYXIvY29tcG9uZW50cy9uYXZiYXItaXRlbS9uYXZiYXItaXRlbVwiO1xyXG5pbXBvcnQge05hdmJhckNhcnRDb21wb25lbnR9IGZyb20gXCIuL25hdmJhci9jb21wb25lbnRzL25hdmJhci1jYXJ0L25hdmJhci1jYXJ0XCI7XHJcbmltcG9ydCB7TmF2YmFyQnJhbmRDb21wb25lbnR9IGZyb20gXCIuL25hdmJhci9jb21wb25lbnRzL25hdmJhci1icmFuZC9uYXZiYXItYnJhbmRcIjtcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgICAgIEp1bWJvdHJvbkNvbXBvbmVudCxcclxuICAgICAgICBKdW1ib0NvbXBvbmVudCxcclxuICAgICAgICBNYXBzQ29tcG9uZW50LFxyXG4gICAgICAgIE1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdmJhckl0ZW1Db21wb25lbnQsXHJcbiAgICAgICAgTmF2YmFyQ2FydENvbXBvbmVudCxcclxuICAgICAgICBOYXZiYXJCcmFuZENvbXBvbmVudCxcclxuICAgICAgICBQYWdlckNvbXBvbmVudCxcclxuICAgICAgICBQcm9ncmVzc0NvbXBvbmVudCxcclxuICAgICAgICBQcmljZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICAgIFJvdXRlck1vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgICAgIEp1bWJvQ29tcG9uZW50LEp1bWJvdHJvbkNvbXBvbmVudCxcclxuICAgICAgICBNYXBzQ29tcG9uZW50LFxyXG4gICAgICAgIE1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgICAgIFBhZ2VyQ29tcG9uZW50LFxyXG4gICAgICAgIFByb2dyZXNzQ29tcG9uZW50LFxyXG4gICAgICAgIFByaWNlQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2R1bGVDb21wb25lbnRzIHtcclxuXHJcbn1cclxuLypcclxuZXhwb3J0IHtcclxuICAgIEZvb3RlckNvbXBvbmVudCxcclxuICAgIEp1bWJvQ29tcG9uZW50LFxyXG4gICAgTWFwc0NvbXBvbmVudCxcclxuICAgIE1lbnVDb21wb25lbnQsXHJcbiAgICBOYXZiYXJDb21wb25lbnQsXHJcbiAgICBQYWdlckNvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQ29tcG9uZW50LFxyXG4gICAgUHJpY2VDb21wb25lbnRcclxufSovIl19