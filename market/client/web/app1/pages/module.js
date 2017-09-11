var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CartPage } from "./cart/cart/cart";
import { HistoryPage } from "./cart/history/history";
import { CatalogPage } from "./catalog/catalog";
import { DeliveryPage } from "./delivery/delivery";
import { SpecialsPage } from "./specials/specials";
import { StocksPage } from "./stocks/page-stocks";
import { ViewPage } from "./view/view";
import { ControlsModule } from "controls/module";
import { RouterModule } from "@angular/router";
import { ModuleComponentsSpecials } from "./specials/components/module";
import { BrowserModule } from "@angular/platform-browser";
import { NotfoundPage } from "./notfound/page-notfound";
import { ContactsPage } from "./contacts/contacts";
import { ModuleComponentsView } from "./view/components/module";
import { ModuleComponentsCart } from "./cart/components/module";
import { ModuleComponentsCatalog } from "./catalog/components/module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
const appRoutes = [
    { path: '', component: SpecialsPage },
    { path: 'delivery', component: DeliveryPage },
    { path: 'contacts', component: ContactsPage },
    { path: 'cart', component: CartPage },
    { path: 'cart/:order', component: HistoryPage },
    { path: 'stocks', component: StocksPage },
    { path: 'notfound', component: NotfoundPage },
    { path: ':categoryName/:productId', component: ViewPage },
    { path: ':categoryName', component: CatalogPage },
    { path: '**', redirectTo: '/notfound' },
];
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    NgModule({
        declarations: [
            CartPage,
            HistoryPage,
            CatalogPage,
            DeliveryPage,
            SpecialsPage,
            StocksPage,
            ViewPage,
            NotfoundPage,
            ContactsPage
        ],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            ControlsModule,
            ModuleComponentsSpecials,
            ModuleComponentsView,
            ModuleComponentsCart,
            ModuleComponentsCatalog,
            RouterModule.forRoot(appRoutes)
        ],
        exports: [
            CartPage,
            HistoryPage,
            CatalogPage,
            DeliveryPage,
            SpecialsPage,
            StocksPage,
            ViewPage,
            NotfoundPage,
            ContactsPage
        ]
    })
], PagesModule);
export { PagesModule, CartPage, HistoryPage, CatalogPage, DeliveryPage, SpecialsPage, StocksPage, ViewPage, NotfoundPage, ContactsPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFlBQVksRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFLE1BQU0sU0FBUyxHQUFXO0lBQ3RCLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO0lBQ25DLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO0lBQzNDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO0lBQzNDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO0lBQ25DLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDO0lBQzdDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO0lBQ3ZDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO0lBQzNDLEVBQUMsSUFBSSxFQUFFLDBCQUEwQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7SUFDdkQsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7SUFDL0MsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUM7Q0FDeEMsQ0FBQztBQW9DRixJQUFNLFdBQVcsR0FBakI7Q0FFQyxDQUFBO0FBRkssV0FBVztJQWxDaEIsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YsUUFBUTtZQUNSLFdBQVc7WUFDWCxXQUFXO1lBQ1gsWUFBWTtZQUNaLFlBQVk7WUFDWixVQUFVO1lBQ1YsUUFBUTtZQUNSLFlBQVk7WUFDWixZQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCxhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQix1QkFBdUI7WUFDdkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDbEM7UUFDRCxPQUFPLEVBQUU7WUFDTCxRQUFRO1lBQ1IsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsWUFBWTtZQUNaLFlBQVk7U0FDZjtLQUNKLENBQUM7R0FDSSxXQUFXLENBRWhCO0FBRUQsT0FBTSxFQUNGLFdBQVcsRUFDWCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixRQUFRLEVBQ1IsWUFBWSxFQUNaLFlBQVksRUFDZixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDYXJ0UGFnZX0gZnJvbSBcIi4vY2FydC9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IHtIaXN0b3J5UGFnZX0gZnJvbSBcIi4vY2FydC9oaXN0b3J5L2hpc3RvcnlcIjtcclxuaW1wb3J0IHtDYXRhbG9nUGFnZX0gZnJvbSBcIi4vY2F0YWxvZy9jYXRhbG9nXCI7XHJcbmltcG9ydCB7RGVsaXZlcnlQYWdlfSBmcm9tIFwiLi9kZWxpdmVyeS9kZWxpdmVyeVwiO1xyXG5pbXBvcnQge1NwZWNpYWxzUGFnZX0gZnJvbSBcIi4vc3BlY2lhbHMvc3BlY2lhbHNcIjtcclxuaW1wb3J0IHtTdG9ja3NQYWdlfSBmcm9tIFwiLi9zdG9ja3MvcGFnZS1zdG9ja3NcIjtcclxuaW1wb3J0IHtWaWV3UGFnZX0gZnJvbSBcIi4vdmlldy92aWV3XCI7XHJcbmltcG9ydCB7Q29udHJvbHNNb2R1bGV9IGZyb20gXCJjb250cm9scy9tb2R1bGVcIjtcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge01vZHVsZUNvbXBvbmVudHNTcGVjaWFsc30gZnJvbSBcIi4vc3BlY2lhbHMvY29tcG9uZW50cy9tb2R1bGVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge05vdGZvdW5kUGFnZX0gZnJvbSBcIi4vbm90Zm91bmQvcGFnZS1ub3Rmb3VuZFwiO1xyXG5pbXBvcnQge0NvbnRhY3RzUGFnZX0gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdHNcIjtcclxuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzVmlld30gZnJvbSBcIi4vdmlldy9jb21wb25lbnRzL21vZHVsZVwiO1xyXG5pbXBvcnQge01vZHVsZUNvbXBvbmVudHNDYXJ0fSBmcm9tIFwiLi9jYXJ0L2NvbXBvbmVudHMvbW9kdWxlXCI7XHJcbmltcG9ydCB7TW9kdWxlQ29tcG9uZW50c0NhdGFsb2d9IGZyb20gXCIuL2NhdGFsb2cvY29tcG9uZW50cy9tb2R1bGVcIjtcclxuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7cGF0aDogJycsIGNvbXBvbmVudDogU3BlY2lhbHNQYWdlfSxcclxuICAgIHtwYXRoOiAnZGVsaXZlcnknLCBjb21wb25lbnQ6IERlbGl2ZXJ5UGFnZX0sXHJcbiAgICB7cGF0aDogJ2NvbnRhY3RzJywgY29tcG9uZW50OiBDb250YWN0c1BhZ2V9LFxyXG4gICAge3BhdGg6ICdjYXJ0JywgY29tcG9uZW50OiBDYXJ0UGFnZX0sXHJcbiAgICB7cGF0aDogJ2NhcnQvOm9yZGVyJywgY29tcG9uZW50OiBIaXN0b3J5UGFnZX0sXHJcbiAgICB7cGF0aDogJ3N0b2NrcycsIGNvbXBvbmVudDogU3RvY2tzUGFnZX0sXHJcbiAgICB7cGF0aDogJ25vdGZvdW5kJywgY29tcG9uZW50OiBOb3Rmb3VuZFBhZ2V9LFxyXG4gICAge3BhdGg6ICc6Y2F0ZWdvcnlOYW1lLzpwcm9kdWN0SWQnLCBjb21wb25lbnQ6IFZpZXdQYWdlfSxcclxuICAgIHtwYXRoOiAnOmNhdGVnb3J5TmFtZScsIGNvbXBvbmVudDogQ2F0YWxvZ1BhZ2V9LFxyXG4gICAge3BhdGg6ICcqKicsIHJlZGlyZWN0VG86ICcvbm90Zm91bmQnfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDYXJ0UGFnZSxcclxuICAgICAgICBIaXN0b3J5UGFnZSxcclxuICAgICAgICBDYXRhbG9nUGFnZSxcclxuICAgICAgICBEZWxpdmVyeVBhZ2UsXHJcbiAgICAgICAgU3BlY2lhbHNQYWdlLFxyXG4gICAgICAgIFN0b2Nrc1BhZ2UsXHJcbiAgICAgICAgVmlld1BhZ2UsXHJcbiAgICAgICAgTm90Zm91bmRQYWdlLFxyXG4gICAgICAgIENvbnRhY3RzUGFnZVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgICAgIENvbnRyb2xzTW9kdWxlLFxyXG4gICAgICAgIE1vZHVsZUNvbXBvbmVudHNTcGVjaWFscyxcclxuICAgICAgICBNb2R1bGVDb21wb25lbnRzVmlldyxcclxuICAgICAgICBNb2R1bGVDb21wb25lbnRzQ2FydCxcclxuICAgICAgICBNb2R1bGVDb21wb25lbnRzQ2F0YWxvZyxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENhcnRQYWdlLFxyXG4gICAgICAgIEhpc3RvcnlQYWdlLFxyXG4gICAgICAgIENhdGFsb2dQYWdlLFxyXG4gICAgICAgIERlbGl2ZXJ5UGFnZSxcclxuICAgICAgICBTcGVjaWFsc1BhZ2UsXHJcbiAgICAgICAgU3RvY2tzUGFnZSxcclxuICAgICAgICBWaWV3UGFnZSxcclxuICAgICAgICBOb3Rmb3VuZFBhZ2UsXHJcbiAgICAgICAgQ29udGFjdHNQYWdlXHJcbiAgICBdXHJcbn0pXHJcbmNsYXNzIFBhZ2VzTW9kdWxlIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydHtcclxuICAgIFBhZ2VzTW9kdWxlLFxyXG4gICAgQ2FydFBhZ2UsXHJcbiAgICBIaXN0b3J5UGFnZSxcclxuICAgIENhdGFsb2dQYWdlLFxyXG4gICAgRGVsaXZlcnlQYWdlLFxyXG4gICAgU3BlY2lhbHNQYWdlLFxyXG4gICAgU3RvY2tzUGFnZSxcclxuICAgIFZpZXdQYWdlLFxyXG4gICAgTm90Zm91bmRQYWdlLFxyXG4gICAgQ29udGFjdHNQYWdlXHJcbn0iXX0=