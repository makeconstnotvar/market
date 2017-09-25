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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFlBQVksRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxNQUFNLFNBQVMsR0FBVztJQUN0QjtRQUNJLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUU7WUFDMUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBQztZQUNoRCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztZQUN2QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQztZQUMzQyxFQUFDLElBQUksRUFBRSwwQkFBMEIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO1lBQ3ZELEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDO1lBQy9DLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFDO1NBQzVDO0tBQ0E7Q0FFSixDQUFDO0FBb0NGLElBQU0sV0FBVyxHQUFqQjtDQUVDLENBQUE7QUFGSyxXQUFXO0lBbENoQixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVixRQUFRO1lBQ1IsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsWUFBWTtZQUNaLFlBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUN2QixZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUNsQztRQUNELE9BQU8sRUFBRTtZQUNMLFFBQVE7WUFDUixXQUFXO1lBQ1gsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osVUFBVTtZQUNWLFFBQVE7WUFDUixZQUFZO1lBQ1osWUFBWTtTQUNmO0tBQ0osQ0FBQztHQUNJLFdBQVcsQ0FFaEI7QUFFRCxPQUFPLEVBQ0gsV0FBVyxFQUNYLFFBQVEsRUFDUixXQUFXLEVBQ1gsV0FBVyxFQUNYLFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLFFBQVEsRUFDUixZQUFZLEVBQ1osWUFBWSxFQUNmLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NhcnRQYWdlfSBmcm9tIFwiLi9jYXJ0L2NhcnQvY2FydFwiO1xyXG5pbXBvcnQge0hpc3RvcnlQYWdlfSBmcm9tIFwiLi9jYXJ0L2hpc3RvcnkvaGlzdG9yeVwiO1xyXG5pbXBvcnQge0NhdGFsb2dQYWdlfSBmcm9tIFwiLi9jYXRhbG9nL2NhdGFsb2dcIjtcclxuaW1wb3J0IHtEZWxpdmVyeVBhZ2V9IGZyb20gXCIuL2RlbGl2ZXJ5L2RlbGl2ZXJ5XCI7XHJcbmltcG9ydCB7U3BlY2lhbHNQYWdlfSBmcm9tIFwiLi9zcGVjaWFscy9zcGVjaWFsc1wiO1xyXG5pbXBvcnQge1N0b2Nrc1BhZ2V9IGZyb20gXCIuL3N0b2Nrcy9zdG9ja3NcIjtcclxuaW1wb3J0IHtWaWV3UGFnZX0gZnJvbSBcIi4vdmlldy92aWV3XCI7XHJcbmltcG9ydCB7Q29udHJvbHNNb2R1bGV9IGZyb20gXCJjb250cm9scy9tb2R1bGVcIjtcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge01vZHVsZUNvbXBvbmVudHNTcGVjaWFsc30gZnJvbSBcIi4vc3BlY2lhbHMvY29tcG9uZW50cy9tb2R1bGVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge05vdGZvdW5kUGFnZX0gZnJvbSBcIi4vbm90Zm91bmQvcGFnZS1ub3Rmb3VuZFwiO1xyXG5pbXBvcnQge0NvbnRhY3RzUGFnZX0gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdHNcIjtcclxuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzVmlld30gZnJvbSBcIi4vdmlldy9jb21wb25lbnRzL21vZHVsZVwiO1xyXG5pbXBvcnQge01vZHVsZUNvbXBvbmVudHNDYXJ0fSBmcm9tIFwiLi9jYXJ0L2NvbXBvbmVudHMvbW9kdWxlXCI7XHJcbmltcG9ydCB7TW9kdWxlQ29tcG9uZW50c0NhdGFsb2d9IGZyb20gXCIuL2NhdGFsb2cvY29tcG9uZW50cy9tb2R1bGVcIjtcclxuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge0RlZmF1bHRMYXlvdXR9IGZyb20gXCIuLi9sYXlvdXRzL2RlZmF1bHRcIjtcclxuXHJcbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLCBjb21wb25lbnQ6IERlZmF1bHRMYXlvdXQsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBTcGVjaWFsc1BhZ2V9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ2RlbGl2ZXJ5JywgY29tcG9uZW50OiBEZWxpdmVyeVBhZ2V9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ2NvbnRhY3RzJywgY29tcG9uZW50OiBDb250YWN0c1BhZ2V9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ2NhcnQnLCBjb21wb25lbnQ6IENhcnRQYWdlfSxcclxuICAgICAgICAgICAge3BhdGg6ICdjYXJ0Lzpjb250cmFjdCcsIGNvbXBvbmVudDogSGlzdG9yeVBhZ2V9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ3N0b2NrcycsIGNvbXBvbmVudDogU3RvY2tzUGFnZX0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAnbm90Zm91bmQnLCBjb21wb25lbnQ6IE5vdGZvdW5kUGFnZX0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAnOmNhdGVnb3J5TmFtZS86cHJvZHVjdElkJywgY29tcG9uZW50OiBWaWV3UGFnZX0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAnOmNhdGVnb3J5TmFtZScsIGNvbXBvbmVudDogQ2F0YWxvZ1BhZ2V9LFxyXG4gICAgICAgICAgICB7cGF0aDogJyoqJywgcmVkaXJlY3RUbzogJy9ub3Rmb3VuZCd9XHJcbiAgICBdXHJcbiAgICB9XHJcblxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIENhcnRQYWdlLFxyXG4gICAgICAgIEhpc3RvcnlQYWdlLFxyXG4gICAgICAgIENhdGFsb2dQYWdlLFxyXG4gICAgICAgIERlbGl2ZXJ5UGFnZSxcclxuICAgICAgICBTcGVjaWFsc1BhZ2UsXHJcbiAgICAgICAgU3RvY2tzUGFnZSxcclxuICAgICAgICBWaWV3UGFnZSxcclxuICAgICAgICBOb3Rmb3VuZFBhZ2UsXHJcbiAgICAgICAgQ29udGFjdHNQYWdlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICAgICAgQ29udHJvbHNNb2R1bGUsXHJcbiAgICAgICAgTW9kdWxlQ29tcG9uZW50c1NwZWNpYWxzLFxyXG4gICAgICAgIE1vZHVsZUNvbXBvbmVudHNWaWV3LFxyXG4gICAgICAgIE1vZHVsZUNvbXBvbmVudHNDYXJ0LFxyXG4gICAgICAgIE1vZHVsZUNvbXBvbmVudHNDYXRhbG9nLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcylcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgQ2FydFBhZ2UsXHJcbiAgICAgICAgSGlzdG9yeVBhZ2UsXHJcbiAgICAgICAgQ2F0YWxvZ1BhZ2UsXHJcbiAgICAgICAgRGVsaXZlcnlQYWdlLFxyXG4gICAgICAgIFNwZWNpYWxzUGFnZSxcclxuICAgICAgICBTdG9ja3NQYWdlLFxyXG4gICAgICAgIFZpZXdQYWdlLFxyXG4gICAgICAgIE5vdGZvdW5kUGFnZSxcclxuICAgICAgICBDb250YWN0c1BhZ2VcclxuICAgIF1cclxufSlcclxuY2xhc3MgUGFnZXNNb2R1bGUge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIFBhZ2VzTW9kdWxlLFxyXG4gICAgQ2FydFBhZ2UsXHJcbiAgICBIaXN0b3J5UGFnZSxcclxuICAgIENhdGFsb2dQYWdlLFxyXG4gICAgRGVsaXZlcnlQYWdlLFxyXG4gICAgU3BlY2lhbHNQYWdlLFxyXG4gICAgU3RvY2tzUGFnZSxcclxuICAgIFZpZXdQYWdlLFxyXG4gICAgTm90Zm91bmRQYWdlLFxyXG4gICAgQ29udGFjdHNQYWdlXHJcbn0iXX0=