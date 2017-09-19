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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFlBQVksRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxNQUFNLFNBQVMsR0FBVztJQUN0QjtRQUNJLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUU7WUFDMUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUM7WUFDdkMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztZQUN2RCxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBQztZQUMvQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBQztTQUM1QztLQUNBO0NBRUosQ0FBQztBQW9DRixJQUFNLFdBQVcsR0FBakI7Q0FFQyxDQUFBO0FBRkssV0FBVztJQWxDaEIsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YsUUFBUTtZQUNSLFdBQVc7WUFDWCxXQUFXO1lBQ1gsWUFBWTtZQUNaLFlBQVk7WUFDWixVQUFVO1lBQ1YsUUFBUTtZQUNSLFlBQVk7WUFDWixZQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCxhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQix1QkFBdUI7WUFDdkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDbEM7UUFDRCxPQUFPLEVBQUU7WUFDTCxRQUFRO1lBQ1IsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsWUFBWTtZQUNaLFlBQVk7U0FDZjtLQUNKLENBQUM7R0FDSSxXQUFXLENBRWhCO0FBRUQsT0FBTyxFQUNILFdBQVcsRUFDWCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixRQUFRLEVBQ1IsWUFBWSxFQUNaLFlBQVksRUFDZixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDYXJ0UGFnZX0gZnJvbSBcIi4vY2FydC9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IHtIaXN0b3J5UGFnZX0gZnJvbSBcIi4vY2FydC9oaXN0b3J5L2hpc3RvcnlcIjtcclxuaW1wb3J0IHtDYXRhbG9nUGFnZX0gZnJvbSBcIi4vY2F0YWxvZy9jYXRhbG9nXCI7XHJcbmltcG9ydCB7RGVsaXZlcnlQYWdlfSBmcm9tIFwiLi9kZWxpdmVyeS9kZWxpdmVyeVwiO1xyXG5pbXBvcnQge1NwZWNpYWxzUGFnZX0gZnJvbSBcIi4vc3BlY2lhbHMvc3BlY2lhbHNcIjtcclxuaW1wb3J0IHtTdG9ja3NQYWdlfSBmcm9tIFwiLi9zdG9ja3Mvc3RvY2tzXCI7XHJcbmltcG9ydCB7Vmlld1BhZ2V9IGZyb20gXCIuL3ZpZXcvdmlld1wiO1xyXG5pbXBvcnQge0NvbnRyb2xzTW9kdWxlfSBmcm9tIFwiY29udHJvbHMvbW9kdWxlXCI7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlLCBSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzU3BlY2lhbHN9IGZyb20gXCIuL3NwZWNpYWxzL2NvbXBvbmVudHMvbW9kdWxlXCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtOb3Rmb3VuZFBhZ2V9IGZyb20gXCIuL25vdGZvdW5kL3BhZ2Utbm90Zm91bmRcIjtcclxuaW1wb3J0IHtDb250YWN0c1BhZ2V9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3RzXCI7XHJcbmltcG9ydCB7TW9kdWxlQ29tcG9uZW50c1ZpZXd9IGZyb20gXCIuL3ZpZXcvY29tcG9uZW50cy9tb2R1bGVcIjtcclxuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzQ2FydH0gZnJvbSBcIi4vY2FydC9jb21wb25lbnRzL21vZHVsZVwiO1xyXG5pbXBvcnQge01vZHVsZUNvbXBvbmVudHNDYXRhbG9nfSBmcm9tIFwiLi9jYXRhbG9nL2NvbXBvbmVudHMvbW9kdWxlXCI7XHJcbmltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtEZWZhdWx0TGF5b3V0fSBmcm9tIFwiLi4vbGF5b3V0cy9kZWZhdWx0XCI7XHJcblxyXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJywgY29tcG9uZW50OiBEZWZhdWx0TGF5b3V0LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7cGF0aDogJycsIGNvbXBvbmVudDogU3BlY2lhbHNQYWdlfSxcclxuICAgICAgICAgICAge3BhdGg6ICdkZWxpdmVyeScsIGNvbXBvbmVudDogRGVsaXZlcnlQYWdlfSxcclxuICAgICAgICAgICAge3BhdGg6ICdjb250YWN0cycsIGNvbXBvbmVudDogQ29udGFjdHNQYWdlfSxcclxuICAgICAgICAgICAge3BhdGg6ICdjYXJ0JywgY29tcG9uZW50OiBDYXJ0UGFnZX0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAnY2FydC86b3JkZXInLCBjb21wb25lbnQ6IEhpc3RvcnlQYWdlfSxcclxuICAgICAgICAgICAge3BhdGg6ICdzdG9ja3MnLCBjb21wb25lbnQ6IFN0b2Nrc1BhZ2V9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ25vdGZvdW5kJywgY29tcG9uZW50OiBOb3Rmb3VuZFBhZ2V9LFxyXG4gICAgICAgICAgICB7cGF0aDogJzpjYXRlZ29yeU5hbWUvOnByb2R1Y3RJZCcsIGNvbXBvbmVudDogVmlld1BhZ2V9LFxyXG4gICAgICAgICAgICB7cGF0aDogJzpjYXRlZ29yeU5hbWUnLCBjb21wb25lbnQ6IENhdGFsb2dQYWdlfSxcclxuICAgICAgICAgICAge3BhdGg6ICcqKicsIHJlZGlyZWN0VG86ICcvbm90Zm91bmQnfVxyXG4gICAgXVxyXG4gICAgfVxyXG5cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDYXJ0UGFnZSxcclxuICAgICAgICBIaXN0b3J5UGFnZSxcclxuICAgICAgICBDYXRhbG9nUGFnZSxcclxuICAgICAgICBEZWxpdmVyeVBhZ2UsXHJcbiAgICAgICAgU3BlY2lhbHNQYWdlLFxyXG4gICAgICAgIFN0b2Nrc1BhZ2UsXHJcbiAgICAgICAgVmlld1BhZ2UsXHJcbiAgICAgICAgTm90Zm91bmRQYWdlLFxyXG4gICAgICAgIENvbnRhY3RzUGFnZVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgICAgIENvbnRyb2xzTW9kdWxlLFxyXG4gICAgICAgIE1vZHVsZUNvbXBvbmVudHNTcGVjaWFscyxcclxuICAgICAgICBNb2R1bGVDb21wb25lbnRzVmlldyxcclxuICAgICAgICBNb2R1bGVDb21wb25lbnRzQ2FydCxcclxuICAgICAgICBNb2R1bGVDb21wb25lbnRzQ2F0YWxvZyxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENhcnRQYWdlLFxyXG4gICAgICAgIEhpc3RvcnlQYWdlLFxyXG4gICAgICAgIENhdGFsb2dQYWdlLFxyXG4gICAgICAgIERlbGl2ZXJ5UGFnZSxcclxuICAgICAgICBTcGVjaWFsc1BhZ2UsXHJcbiAgICAgICAgU3RvY2tzUGFnZSxcclxuICAgICAgICBWaWV3UGFnZSxcclxuICAgICAgICBOb3Rmb3VuZFBhZ2UsXHJcbiAgICAgICAgQ29udGFjdHNQYWdlXHJcbiAgICBdXHJcbn0pXHJcbmNsYXNzIFBhZ2VzTW9kdWxlIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBQYWdlc01vZHVsZSxcclxuICAgIENhcnRQYWdlLFxyXG4gICAgSGlzdG9yeVBhZ2UsXHJcbiAgICBDYXRhbG9nUGFnZSxcclxuICAgIERlbGl2ZXJ5UGFnZSxcclxuICAgIFNwZWNpYWxzUGFnZSxcclxuICAgIFN0b2Nrc1BhZ2UsXHJcbiAgICBWaWV3UGFnZSxcclxuICAgIE5vdGZvdW5kUGFnZSxcclxuICAgIENvbnRhY3RzUGFnZVxyXG59Il19