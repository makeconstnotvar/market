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
            { path: 'cart/:order', component: HistoryPage },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFlBQVksRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxNQUFNLFNBQVMsR0FBVztJQUN0QjtRQUNJLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUU7WUFDMUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUM7WUFDdkMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztZQUN2RCxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBQztZQUMvQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBQztTQUM1QztLQUNBO0NBRUosQ0FBQztBQW9DRixJQUFNLFdBQVcsR0FBakI7Q0FFQyxDQUFBO0FBRkssV0FBVztJQWxDaEIsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YsUUFBUTtZQUNSLFdBQVc7WUFDWCxXQUFXO1lBQ1gsWUFBWTtZQUNaLFlBQVk7WUFDWixVQUFVO1lBQ1YsUUFBUTtZQUNSLFlBQVk7WUFDWixZQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCxhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQix1QkFBdUI7WUFDdkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDbEM7UUFDRCxPQUFPLEVBQUU7WUFDTCxRQUFRO1lBQ1IsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsWUFBWTtZQUNaLFlBQVk7U0FDZjtLQUNKLENBQUM7R0FDSSxXQUFXLENBRWhCO0FBRUQsT0FBTyxFQUNILFdBQVcsRUFDWCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixRQUFRLEVBQ1IsWUFBWSxFQUNaLFlBQVksRUFDZixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q2FydFBhZ2V9IGZyb20gXCIuL2NhcnQvY2FydC9jYXJ0XCI7XG5pbXBvcnQge0hpc3RvcnlQYWdlfSBmcm9tIFwiLi9jYXJ0L2hpc3RvcnkvaGlzdG9yeVwiO1xuaW1wb3J0IHtDYXRhbG9nUGFnZX0gZnJvbSBcIi4vY2F0YWxvZy9jYXRhbG9nXCI7XG5pbXBvcnQge0RlbGl2ZXJ5UGFnZX0gZnJvbSBcIi4vZGVsaXZlcnkvZGVsaXZlcnlcIjtcbmltcG9ydCB7U3BlY2lhbHNQYWdlfSBmcm9tIFwiLi9zcGVjaWFscy9zcGVjaWFsc1wiO1xuaW1wb3J0IHtTdG9ja3NQYWdlfSBmcm9tIFwiLi9zdG9ja3Mvc3RvY2tzXCI7XG5pbXBvcnQge1ZpZXdQYWdlfSBmcm9tIFwiLi92aWV3L3ZpZXdcIjtcbmltcG9ydCB7Q29udHJvbHNNb2R1bGV9IGZyb20gXCJjb250cm9scy9tb2R1bGVcIjtcbmltcG9ydCB7Um91dGVyTW9kdWxlLCBSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TW9kdWxlQ29tcG9uZW50c1NwZWNpYWxzfSBmcm9tIFwiLi9zcGVjaWFscy9jb21wb25lbnRzL21vZHVsZVwiO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHtOb3Rmb3VuZFBhZ2V9IGZyb20gXCIuL25vdGZvdW5kL3BhZ2Utbm90Zm91bmRcIjtcbmltcG9ydCB7Q29udGFjdHNQYWdlfSBmcm9tIFwiLi9jb250YWN0cy9jb250YWN0c1wiO1xuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzVmlld30gZnJvbSBcIi4vdmlldy9jb21wb25lbnRzL21vZHVsZVwiO1xuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzQ2FydH0gZnJvbSBcIi4vY2FydC9jb21wb25lbnRzL21vZHVsZVwiO1xuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzQ2F0YWxvZ30gZnJvbSBcIi4vY2F0YWxvZy9jb21wb25lbnRzL21vZHVsZVwiO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHtEZWZhdWx0TGF5b3V0fSBmcm9tIFwiLi4vbGF5b3V0cy9kZWZhdWx0XCI7XG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJycsIGNvbXBvbmVudDogRGVmYXVsdExheW91dCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBTcGVjaWFsc1BhZ2V9LFxuICAgICAgICAgICAge3BhdGg6ICdkZWxpdmVyeScsIGNvbXBvbmVudDogRGVsaXZlcnlQYWdlfSxcbiAgICAgICAgICAgIHtwYXRoOiAnY29udGFjdHMnLCBjb21wb25lbnQ6IENvbnRhY3RzUGFnZX0sXG4gICAgICAgICAgICB7cGF0aDogJ2NhcnQnLCBjb21wb25lbnQ6IENhcnRQYWdlfSxcbiAgICAgICAgICAgIHtwYXRoOiAnY2FydC86b3JkZXInLCBjb21wb25lbnQ6IEhpc3RvcnlQYWdlfSxcbiAgICAgICAgICAgIHtwYXRoOiAnc3RvY2tzJywgY29tcG9uZW50OiBTdG9ja3NQYWdlfSxcbiAgICAgICAgICAgIHtwYXRoOiAnbm90Zm91bmQnLCBjb21wb25lbnQ6IE5vdGZvdW5kUGFnZX0sXG4gICAgICAgICAgICB7cGF0aDogJzpjYXRlZ29yeU5hbWUvOnByb2R1Y3RJZCcsIGNvbXBvbmVudDogVmlld1BhZ2V9LFxuICAgICAgICAgICAge3BhdGg6ICc6Y2F0ZWdvcnlOYW1lJywgY29tcG9uZW50OiBDYXRhbG9nUGFnZX0sXG4gICAgICAgICAgICB7cGF0aDogJyoqJywgcmVkaXJlY3RUbzogJy9ub3Rmb3VuZCd9XG4gICAgXVxuICAgIH1cblxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2FydFBhZ2UsXG4gICAgICAgIEhpc3RvcnlQYWdlLFxuICAgICAgICBDYXRhbG9nUGFnZSxcbiAgICAgICAgRGVsaXZlcnlQYWdlLFxuICAgICAgICBTcGVjaWFsc1BhZ2UsXG4gICAgICAgIFN0b2Nrc1BhZ2UsXG4gICAgICAgIFZpZXdQYWdlLFxuICAgICAgICBOb3Rmb3VuZFBhZ2UsXG4gICAgICAgIENvbnRhY3RzUGFnZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICAgICAgQ29udHJvbHNNb2R1bGUsXG4gICAgICAgIE1vZHVsZUNvbXBvbmVudHNTcGVjaWFscyxcbiAgICAgICAgTW9kdWxlQ29tcG9uZW50c1ZpZXcsXG4gICAgICAgIE1vZHVsZUNvbXBvbmVudHNDYXJ0LFxuICAgICAgICBNb2R1bGVDb21wb25lbnRzQ2F0YWxvZyxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBDYXJ0UGFnZSxcbiAgICAgICAgSGlzdG9yeVBhZ2UsXG4gICAgICAgIENhdGFsb2dQYWdlLFxuICAgICAgICBEZWxpdmVyeVBhZ2UsXG4gICAgICAgIFNwZWNpYWxzUGFnZSxcbiAgICAgICAgU3RvY2tzUGFnZSxcbiAgICAgICAgVmlld1BhZ2UsXG4gICAgICAgIE5vdGZvdW5kUGFnZSxcbiAgICAgICAgQ29udGFjdHNQYWdlXG4gICAgXVxufSlcbmNsYXNzIFBhZ2VzTW9kdWxlIHtcblxufVxuXG5leHBvcnQge1xuICAgIFBhZ2VzTW9kdWxlLFxuICAgIENhcnRQYWdlLFxuICAgIEhpc3RvcnlQYWdlLFxuICAgIENhdGFsb2dQYWdlLFxuICAgIERlbGl2ZXJ5UGFnZSxcbiAgICBTcGVjaWFsc1BhZ2UsXG4gICAgU3RvY2tzUGFnZSxcbiAgICBWaWV3UGFnZSxcbiAgICBOb3Rmb3VuZFBhZ2UsXG4gICAgQ29udGFjdHNQYWdlXG59Il19