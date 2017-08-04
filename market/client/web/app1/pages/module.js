var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { PageCart } from "./cart/cart/cart";
import { PageHistory } from "./cart/history/history";
import { PageCatalog } from "./catalog/catalog";
import { PageDelivery } from "./delivery/delivery";
import { Layout } from "./layout/layout";
import { PageSpecials } from "./specials/page-specials";
import { PageStocks } from "./stocks/page-stocks";
import { PageView } from "./view/view";
import { ModuleComponents } from "components/module";
import { RouterModule } from "@angular/router";
import { ModuleComponentsSpecials } from "./specials/components/module";
import { BrowserModule } from "@angular/platform-browser";
import { PageNotfound } from "./notfound/page-notfound";
import { PageContacts } from "./contacts/contacts";
import { ModuleComponentsView } from "./view/components/module";
import { ModuleComponentsCart } from "./cart/components/module";
import { ModuleComponentsCatalog } from "./catalog/components/module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
const appRoutes = [
    { path: '', component: PageSpecials },
    { path: 'delivery', component: PageDelivery },
    { path: 'contacts', component: PageContacts },
    { path: 'cart', component: PageCart },
    { path: 'cart/:order', component: PageHistory },
    { path: 'stocks', component: PageStocks },
    { path: 'notfound', component: PageNotfound },
    { path: ':categoryName/:productId', component: PageView },
    { path: ':categoryName', component: PageCatalog },
    { path: '**', redirectTo: '/notfound' },
];
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    NgModule({
        declarations: [
            PageCart,
            PageHistory,
            PageCatalog,
            PageDelivery,
            Layout,
            PageSpecials,
            PageStocks,
            PageView,
            PageNotfound,
            PageContacts
        ],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            ModuleComponents,
            ModuleComponentsSpecials,
            ModuleComponentsView,
            ModuleComponentsCart,
            ModuleComponentsCatalog,
            RouterModule.forRoot(appRoutes)
        ],
        exports: [
            PageCart,
            PageHistory,
            PageCatalog,
            PageDelivery,
            Layout,
            PageSpecials,
            PageStocks,
            PageView,
            PageNotfound,
            PageContacts
        ]
    })
], PagesModule);
export { PagesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFLE1BQU0sU0FBUyxHQUFXO0lBQ3RCLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO0lBQ25DLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO0lBQzNDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO0lBQzNDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO0lBQ25DLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDO0lBQzdDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO0lBQ3ZDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO0lBQzNDLEVBQUMsSUFBSSxFQUFFLDBCQUEwQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7SUFDdkQsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7SUFDL0MsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUM7Q0FDeEMsQ0FBQztBQXNDRixJQUFhLFdBQVcsR0FBeEI7Q0FFQyxDQUFBO0FBRlksV0FBVztJQXBDdkIsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YsUUFBUTtZQUNSLFdBQVc7WUFDWCxXQUFXO1lBQ1gsWUFBWTtZQUNaLE1BQU07WUFDTixZQUFZO1lBQ1osVUFBVTtZQUNWLFFBQVE7WUFDUixZQUFZO1lBQ1osWUFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsd0JBQXdCO1lBQ3hCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsdUJBQXVCO1lBQ3ZCLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsUUFBUTtZQUNSLFdBQVc7WUFDWCxXQUFXO1lBQ1gsWUFBWTtZQUNaLE1BQU07WUFDTixZQUFZO1lBQ1osVUFBVTtZQUNWLFFBQVE7WUFDUixZQUFZO1lBQ1osWUFBWTtTQUNmO0tBQ0osQ0FBQztHQUNXLFdBQVcsQ0FFdkI7U0FGWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlQ2FydH0gZnJvbSBcIi4vY2FydC9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IHtQYWdlSGlzdG9yeX0gZnJvbSBcIi4vY2FydC9oaXN0b3J5L2hpc3RvcnlcIjtcclxuaW1wb3J0IHtQYWdlQ2F0YWxvZ30gZnJvbSBcIi4vY2F0YWxvZy9jYXRhbG9nXCI7XHJcbmltcG9ydCB7UGFnZURlbGl2ZXJ5fSBmcm9tIFwiLi9kZWxpdmVyeS9kZWxpdmVyeVwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4vbGF5b3V0L2xheW91dFwiO1xyXG5pbXBvcnQge1BhZ2VTcGVjaWFsc30gZnJvbSBcIi4vc3BlY2lhbHMvcGFnZS1zcGVjaWFsc1wiO1xyXG5pbXBvcnQge1BhZ2VTdG9ja3N9IGZyb20gXCIuL3N0b2Nrcy9wYWdlLXN0b2Nrc1wiO1xyXG5pbXBvcnQge1BhZ2VWaWV3fSBmcm9tIFwiLi92aWV3L3ZpZXdcIjtcclxuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzfSBmcm9tIFwiY29tcG9uZW50cy9tb2R1bGVcIjtcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge01vZHVsZUNvbXBvbmVudHNTcGVjaWFsc30gZnJvbSBcIi4vc3BlY2lhbHMvY29tcG9uZW50cy9tb2R1bGVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge1BhZ2VOb3Rmb3VuZH0gZnJvbSBcIi4vbm90Zm91bmQvcGFnZS1ub3Rmb3VuZFwiO1xyXG5pbXBvcnQge1BhZ2VDb250YWN0c30gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdHNcIjtcclxuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzVmlld30gZnJvbSBcIi4vdmlldy9jb21wb25lbnRzL21vZHVsZVwiO1xyXG5pbXBvcnQge01vZHVsZUNvbXBvbmVudHNDYXJ0fSBmcm9tIFwiLi9jYXJ0L2NvbXBvbmVudHMvbW9kdWxlXCI7XHJcbmltcG9ydCB7TW9kdWxlQ29tcG9uZW50c0NhdGFsb2d9IGZyb20gXCIuL2NhdGFsb2cvY29tcG9uZW50cy9tb2R1bGVcIjtcclxuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7cGF0aDogJycsIGNvbXBvbmVudDogUGFnZVNwZWNpYWxzfSxcclxuICAgIHtwYXRoOiAnZGVsaXZlcnknLCBjb21wb25lbnQ6IFBhZ2VEZWxpdmVyeX0sXHJcbiAgICB7cGF0aDogJ2NvbnRhY3RzJywgY29tcG9uZW50OiBQYWdlQ29udGFjdHN9LFxyXG4gICAge3BhdGg6ICdjYXJ0JywgY29tcG9uZW50OiBQYWdlQ2FydH0sXHJcbiAgICB7cGF0aDogJ2NhcnQvOm9yZGVyJywgY29tcG9uZW50OiBQYWdlSGlzdG9yeX0sXHJcbiAgICB7cGF0aDogJ3N0b2NrcycsIGNvbXBvbmVudDogUGFnZVN0b2Nrc30sXHJcbiAgICB7cGF0aDogJ25vdGZvdW5kJywgY29tcG9uZW50OiBQYWdlTm90Zm91bmR9LFxyXG4gICAge3BhdGg6ICc6Y2F0ZWdvcnlOYW1lLzpwcm9kdWN0SWQnLCBjb21wb25lbnQ6IFBhZ2VWaWV3fSxcclxuICAgIHtwYXRoOiAnOmNhdGVnb3J5TmFtZScsIGNvbXBvbmVudDogUGFnZUNhdGFsb2d9LFxyXG4gICAge3BhdGg6ICcqKicsIHJlZGlyZWN0VG86ICcvbm90Zm91bmQnfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBQYWdlQ2FydCxcclxuICAgICAgICBQYWdlSGlzdG9yeSxcclxuICAgICAgICBQYWdlQ2F0YWxvZyxcclxuICAgICAgICBQYWdlRGVsaXZlcnksXHJcbiAgICAgICAgTGF5b3V0LFxyXG4gICAgICAgIFBhZ2VTcGVjaWFscyxcclxuICAgICAgICBQYWdlU3RvY2tzLFxyXG4gICAgICAgIFBhZ2VWaWV3LFxyXG4gICAgICAgIFBhZ2VOb3Rmb3VuZCxcclxuICAgICAgICBQYWdlQ29udGFjdHNcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgICAgICBNb2R1bGVDb21wb25lbnRzLFxyXG4gICAgICAgIE1vZHVsZUNvbXBvbmVudHNTcGVjaWFscyxcclxuICAgICAgICBNb2R1bGVDb21wb25lbnRzVmlldyxcclxuICAgICAgICBNb2R1bGVDb21wb25lbnRzQ2FydCxcclxuICAgICAgICBNb2R1bGVDb21wb25lbnRzQ2F0YWxvZyxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFBhZ2VDYXJ0LFxyXG4gICAgICAgIFBhZ2VIaXN0b3J5LFxyXG4gICAgICAgIFBhZ2VDYXRhbG9nLFxyXG4gICAgICAgIFBhZ2VEZWxpdmVyeSxcclxuICAgICAgICBMYXlvdXQsXHJcbiAgICAgICAgUGFnZVNwZWNpYWxzLFxyXG4gICAgICAgIFBhZ2VTdG9ja3MsXHJcbiAgICAgICAgUGFnZVZpZXcsXHJcbiAgICAgICAgUGFnZU5vdGZvdW5kLFxyXG4gICAgICAgIFBhZ2VDb250YWN0c1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZXNNb2R1bGUge1xyXG5cclxufVxyXG4iXX0=