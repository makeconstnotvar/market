var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { FooterControl } from "./footer/footer";
import { JumbotronControl } from "./jumbotron/jumbotron";
import { JumboComponent } from "./jumbotron/components/jumbo";
import { MapsControl } from "./maps/maps";
import { MenuControl } from "./menu/menu";
import { PriceControl } from "./price/price";
import { ProgressControl } from "./progress/progress";
import { PagerControl } from "./pager/pager";
import { NavbarControl } from "./navbar/navbar";
import { NavbarItemComponent } from "./navbar/components/navbar-item/navbar-item";
import { NavbarCartComponent } from "./navbar/components/navbar-cart/navbar-cart";
import { NavbarBrandComponent } from "./navbar/components/navbar-brand/navbar-brand";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
let ControlsModule = class ControlsModule {
};
ControlsModule = __decorate([
    NgModule({
        declarations: [
            FooterControl,
            JumbotronControl,
            JumboComponent,
            MapsControl,
            MenuControl,
            NavbarControl,
            NavbarItemComponent,
            NavbarCartComponent,
            NavbarBrandComponent,
            PagerControl,
            ProgressControl,
            PriceControl
        ],
        imports: [
            BrowserModule,
            RouterModule
        ],
        providers: [],
        exports: [
            FooterControl,
            JumbotronControl,
            MapsControl,
            MenuControl,
            NavbarControl,
            PagerControl,
            ProgressControl,
            PriceControl
        ]
    })
], ControlsModule);
export { ControlsModule, FooterControl, JumboComponent, JumbotronControl, MapsControl, MenuControl, NavbarControl, PagerControl, ProgressControl, PriceControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDaEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDaEYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDbkYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQWlDeEQsSUFBTSxjQUFjLEdBQXBCO0NBQXVCLENBQUE7QUFBakIsY0FBYztJQS9CbkIsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsV0FBVztZQUNYLFdBQVc7WUFDWCxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixvQkFBb0I7WUFDcEIsWUFBWTtZQUNaLGVBQWU7WUFDZixZQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCxhQUFhO1lBQ2IsWUFBWTtTQUNmO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUU7WUFDTCxhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxXQUFXO1lBQ1gsYUFBYTtZQUNiLFlBQVk7WUFDWixlQUFlO1lBQ2YsWUFBWTtTQUNmO0tBQ0osQ0FBQztHQUNJLGNBQWMsQ0FBRztBQUV2QixPQUFPLEVBQ0gsY0FBYyxFQUNkLGFBQWEsRUFDYixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsYUFBYSxFQUNiLFlBQVksRUFDWixlQUFlLEVBQ2YsWUFBWSxFQUNmLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Zvb3RlckNvbnRyb2x9IGZyb20gXCIuL2Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IHtKdW1ib3Ryb25Db250cm9sfSBmcm9tIFwiLi9qdW1ib3Ryb24vanVtYm90cm9uXCI7XHJcbmltcG9ydCB7SnVtYm9Db21wb25lbnR9IGZyb20gXCIuL2p1bWJvdHJvbi9jb21wb25lbnRzL2p1bWJvXCI7XHJcbmltcG9ydCB7TWFwc0NvbnRyb2x9IGZyb20gXCIuL21hcHMvbWFwc1wiO1xyXG5pbXBvcnQge01lbnVDb250cm9sfSBmcm9tIFwiLi9tZW51L21lbnVcIjtcclxuaW1wb3J0IHtQcmljZUNvbnRyb2x9IGZyb20gXCIuL3ByaWNlL3ByaWNlXCI7XHJcbmltcG9ydCB7UHJvZ3Jlc3NDb250cm9sfSBmcm9tIFwiLi9wcm9ncmVzcy9wcm9ncmVzc1wiO1xyXG5pbXBvcnQge1BhZ2VyQ29udHJvbH0gZnJvbSBcIi4vcGFnZXIvcGFnZXJcIjtcclxuaW1wb3J0IHtOYXZiYXJDb250cm9sfSBmcm9tIFwiLi9uYXZiYXIvbmF2YmFyXCI7XHJcbmltcG9ydCB7TmF2YmFySXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vbmF2YmFyL2NvbXBvbmVudHMvbmF2YmFyLWl0ZW0vbmF2YmFyLWl0ZW1cIjtcclxuaW1wb3J0IHtOYXZiYXJDYXJ0Q29tcG9uZW50fSBmcm9tIFwiLi9uYXZiYXIvY29tcG9uZW50cy9uYXZiYXItY2FydC9uYXZiYXItY2FydFwiO1xyXG5pbXBvcnQge05hdmJhckJyYW5kQ29tcG9uZW50fSBmcm9tIFwiLi9uYXZiYXIvY29tcG9uZW50cy9uYXZiYXItYnJhbmQvbmF2YmFyLWJyYW5kXCI7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBGb290ZXJDb250cm9sLFxyXG4gICAgICAgIEp1bWJvdHJvbkNvbnRyb2wsXHJcbiAgICAgICAgSnVtYm9Db21wb25lbnQsXHJcbiAgICAgICAgTWFwc0NvbnRyb2wsXHJcbiAgICAgICAgTWVudUNvbnRyb2wsXHJcbiAgICAgICAgTmF2YmFyQ29udHJvbCxcclxuICAgICAgICBOYXZiYXJJdGVtQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdmJhckNhcnRDb21wb25lbnQsXHJcbiAgICAgICAgTmF2YmFyQnJhbmRDb21wb25lbnQsXHJcbiAgICAgICAgUGFnZXJDb250cm9sLFxyXG4gICAgICAgIFByb2dyZXNzQ29udHJvbCxcclxuICAgICAgICBQcmljZUNvbnRyb2xcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIEZvb3RlckNvbnRyb2wsXHJcbiAgICAgICAgSnVtYm90cm9uQ29udHJvbCxcclxuICAgICAgICBNYXBzQ29udHJvbCxcclxuICAgICAgICBNZW51Q29udHJvbCxcclxuICAgICAgICBOYXZiYXJDb250cm9sLFxyXG4gICAgICAgIFBhZ2VyQ29udHJvbCxcclxuICAgICAgICBQcm9ncmVzc0NvbnRyb2wsXHJcbiAgICAgICAgUHJpY2VDb250cm9sXHJcbiAgICBdXHJcbn0pXHJcbmNsYXNzIENvbnRyb2xzTW9kdWxlIHt9XHJcblxyXG5leHBvcnQge1xyXG4gICAgQ29udHJvbHNNb2R1bGUsXHJcbiAgICBGb290ZXJDb250cm9sLFxyXG4gICAgSnVtYm9Db21wb25lbnQsXHJcbiAgICBKdW1ib3Ryb25Db250cm9sLFxyXG4gICAgTWFwc0NvbnRyb2wsXHJcbiAgICBNZW51Q29udHJvbCxcclxuICAgIE5hdmJhckNvbnRyb2wsXHJcbiAgICBQYWdlckNvbnRyb2wsXHJcbiAgICBQcm9ncmVzc0NvbnRyb2wsXHJcbiAgICBQcmljZUNvbnRyb2xcclxufSJdfQ==