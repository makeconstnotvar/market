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
import { StocksPage } from "./stocks/stocks";
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
import { DefaultLayout } from "../layouts/default";
const appRoutes = [
    {
        path: '', component: DefaultLayout, children: [
            { path: '', component: SpecialsPage },
            { path: 'delivery', component: DeliveryPage },
            { path: 'contacts', component: ContactsPage },
            { path: 'cart', component: CartPage },
            { path: 'cart/:contract', component: HistoryPage },
            { path: 'stocks', component: StocksPage },
            { path: 'notfound', component: NotfoundPage },
            { path: ':categoryName/:productId', component: ViewPage },
            { path: ':categoryName', component: CatalogPage },
            { path: '**', redirectTo: '/notfound' }
        ]
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFlBQVksRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxNQUFNLFNBQVMsR0FBVztJQUN0QjtRQUNJLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUU7WUFDMUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBQztZQUNoRCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztZQUN2QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQztZQUMzQyxFQUFDLElBQUksRUFBRSwwQkFBMEIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO1lBQ3ZELEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDO1lBQy9DLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFDO1NBQzVDO0tBQ0E7Q0FFSixDQUFDO0FBb0NGLElBQU0sV0FBVyxHQUFqQjtDQUVDLENBQUE7QUFGSyxXQUFXO0lBbENoQixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVixRQUFRO1lBQ1IsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsWUFBWTtZQUNaLFlBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUN2QixZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUNsQztRQUNELE9BQU8sRUFBRTtZQUNMLFFBQVE7WUFDUixXQUFXO1lBQ1gsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osVUFBVTtZQUNWLFFBQVE7WUFDUixZQUFZO1lBQ1osWUFBWTtTQUNmO0tBQ0osQ0FBQztHQUNJLFdBQVcsQ0FFaEI7QUFFRCxPQUFPLEVBQ0gsV0FBVyxFQUNYLFFBQVEsRUFDUixXQUFXLEVBQ1gsV0FBVyxFQUNYLFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLFFBQVEsRUFDUixZQUFZLEVBQ1osWUFBWSxFQUNmLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDYXJ0UGFnZX0gZnJvbSBcIi4vY2FydC9jYXJ0L2NhcnRcIjtcbmltcG9ydCB7SGlzdG9yeVBhZ2V9IGZyb20gXCIuL2NhcnQvaGlzdG9yeS9oaXN0b3J5XCI7XG5pbXBvcnQge0NhdGFsb2dQYWdlfSBmcm9tIFwiLi9jYXRhbG9nL2NhdGFsb2dcIjtcbmltcG9ydCB7RGVsaXZlcnlQYWdlfSBmcm9tIFwiLi9kZWxpdmVyeS9kZWxpdmVyeVwiO1xuaW1wb3J0IHtTcGVjaWFsc1BhZ2V9IGZyb20gXCIuL3NwZWNpYWxzL3NwZWNpYWxzXCI7XG5pbXBvcnQge1N0b2Nrc1BhZ2V9IGZyb20gXCIuL3N0b2Nrcy9zdG9ja3NcIjtcbmltcG9ydCB7Vmlld1BhZ2V9IGZyb20gXCIuL3ZpZXcvdmlld1wiO1xuaW1wb3J0IHtDb250cm9sc01vZHVsZX0gZnJvbSBcImNvbnRyb2xzL21vZHVsZVwiO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzU3BlY2lhbHN9IGZyb20gXCIuL3NwZWNpYWxzL2NvbXBvbmVudHMvbW9kdWxlXCI7XG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQge05vdGZvdW5kUGFnZX0gZnJvbSBcIi4vbm90Zm91bmQvcGFnZS1ub3Rmb3VuZFwiO1xuaW1wb3J0IHtDb250YWN0c1BhZ2V9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3RzXCI7XG5pbXBvcnQge01vZHVsZUNvbXBvbmVudHNWaWV3fSBmcm9tIFwiLi92aWV3L2NvbXBvbmVudHMvbW9kdWxlXCI7XG5pbXBvcnQge01vZHVsZUNvbXBvbmVudHNDYXJ0fSBmcm9tIFwiLi9jYXJ0L2NvbXBvbmVudHMvbW9kdWxlXCI7XG5pbXBvcnQge01vZHVsZUNvbXBvbmVudHNDYXRhbG9nfSBmcm9tIFwiLi9jYXRhbG9nL2NvbXBvbmVudHMvbW9kdWxlXCI7XG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XG5pbXBvcnQge0RlZmF1bHRMYXlvdXR9IGZyb20gXCIuLi9sYXlvdXRzL2RlZmF1bHRcIjtcblxuY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnJywgY29tcG9uZW50OiBEZWZhdWx0TGF5b3V0LCBjaGlsZHJlbjogW1xuICAgICAgICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IFNwZWNpYWxzUGFnZX0sXG4gICAgICAgICAgICB7cGF0aDogJ2RlbGl2ZXJ5JywgY29tcG9uZW50OiBEZWxpdmVyeVBhZ2V9LFxuICAgICAgICAgICAge3BhdGg6ICdjb250YWN0cycsIGNvbXBvbmVudDogQ29udGFjdHNQYWdlfSxcbiAgICAgICAgICAgIHtwYXRoOiAnY2FydCcsIGNvbXBvbmVudDogQ2FydFBhZ2V9LFxuICAgICAgICAgICAge3BhdGg6ICdjYXJ0Lzpjb250cmFjdCcsIGNvbXBvbmVudDogSGlzdG9yeVBhZ2V9LFxuICAgICAgICAgICAge3BhdGg6ICdzdG9ja3MnLCBjb21wb25lbnQ6IFN0b2Nrc1BhZ2V9LFxuICAgICAgICAgICAge3BhdGg6ICdub3Rmb3VuZCcsIGNvbXBvbmVudDogTm90Zm91bmRQYWdlfSxcbiAgICAgICAgICAgIHtwYXRoOiAnOmNhdGVnb3J5TmFtZS86cHJvZHVjdElkJywgY29tcG9uZW50OiBWaWV3UGFnZX0sXG4gICAgICAgICAgICB7cGF0aDogJzpjYXRlZ29yeU5hbWUnLCBjb21wb25lbnQ6IENhdGFsb2dQYWdlfSxcbiAgICAgICAgICAgIHtwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnL25vdGZvdW5kJ31cbiAgICBdXG4gICAgfVxuXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDYXJ0UGFnZSxcbiAgICAgICAgSGlzdG9yeVBhZ2UsXG4gICAgICAgIENhdGFsb2dQYWdlLFxuICAgICAgICBEZWxpdmVyeVBhZ2UsXG4gICAgICAgIFNwZWNpYWxzUGFnZSxcbiAgICAgICAgU3RvY2tzUGFnZSxcbiAgICAgICAgVmlld1BhZ2UsXG4gICAgICAgIE5vdGZvdW5kUGFnZSxcbiAgICAgICAgQ29udGFjdHNQYWdlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBDb250cm9sc01vZHVsZSxcbiAgICAgICAgTW9kdWxlQ29tcG9uZW50c1NwZWNpYWxzLFxuICAgICAgICBNb2R1bGVDb21wb25lbnRzVmlldyxcbiAgICAgICAgTW9kdWxlQ29tcG9uZW50c0NhcnQsXG4gICAgICAgIE1vZHVsZUNvbXBvbmVudHNDYXRhbG9nLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENhcnRQYWdlLFxuICAgICAgICBIaXN0b3J5UGFnZSxcbiAgICAgICAgQ2F0YWxvZ1BhZ2UsXG4gICAgICAgIERlbGl2ZXJ5UGFnZSxcbiAgICAgICAgU3BlY2lhbHNQYWdlLFxuICAgICAgICBTdG9ja3NQYWdlLFxuICAgICAgICBWaWV3UGFnZSxcbiAgICAgICAgTm90Zm91bmRQYWdlLFxuICAgICAgICBDb250YWN0c1BhZ2VcbiAgICBdXG59KVxuY2xhc3MgUGFnZXNNb2R1bGUge1xuXG59XG5cbmV4cG9ydCB7XG4gICAgUGFnZXNNb2R1bGUsXG4gICAgQ2FydFBhZ2UsXG4gICAgSGlzdG9yeVBhZ2UsXG4gICAgQ2F0YWxvZ1BhZ2UsXG4gICAgRGVsaXZlcnlQYWdlLFxuICAgIFNwZWNpYWxzUGFnZSxcbiAgICBTdG9ja3NQYWdlLFxuICAgIFZpZXdQYWdlLFxuICAgIE5vdGZvdW5kUGFnZSxcbiAgICBDb250YWN0c1BhZ2Vcbn0iXX0=