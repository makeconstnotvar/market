var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ComponentViewInformation } from "./information";
import { ComponentViewGallery } from "./gallery";
import { ComponentViewPhoto } from "./photo";
import { ComponentViewSimilar } from "./similar";
import { ComponentViewSocials } from "./socials";
import { ComponentViewSpecification } from "./specification";
import { ComponentViewTitle } from "./title";
import { ComponentViewSeo } from "./seo";
let ModuleComponentsView = class ModuleComponentsView {
};
ModuleComponentsView = __decorate([
    NgModule({
        declarations: [
            ComponentViewInformation,
            ComponentViewGallery,
            ComponentViewPhoto,
            ComponentViewSimilar,
            ComponentViewSocials,
            ComponentViewSpecification,
            ComponentViewTitle,
            ComponentViewSeo
        ],
        imports: [BrowserModule, RouterModule],
        providers: [],
        exports: [
            ComponentViewInformation,
            ComponentViewGallery,
            ComponentViewPhoto,
            ComponentViewSimilar,
            ComponentViewSocials,
            ComponentViewSpecification,
            ComponentViewTitle,
            ComponentViewSeo
        ]
    })
], ModuleComponentsView);
export { ModuleComponentsView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQy9DLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDL0MsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQy9DLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxPQUFPLENBQUM7QUEyQnZDLElBQWEsb0JBQW9CLEdBQWpDO0NBRUMsQ0FBQTtBQUZZLG9CQUFvQjtJQXhCaEMsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1Ysd0JBQXdCO1lBQ3hCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQiwwQkFBMEI7WUFDMUIsa0JBQWtCO1lBQ2xCLGdCQUFnQjtTQUNuQjtRQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7UUFDdEMsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUU7WUFDTCx3QkFBd0I7WUFDeEIsb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLDBCQUEwQjtZQUMxQixrQkFBa0I7WUFDbEIsZ0JBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUNXLG9CQUFvQixDQUVoQztTQUZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21wb25lbnRWaWV3SW5mb3JtYXRpb259IGZyb20gXCIuL2luZm9ybWF0aW9uXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50Vmlld0dhbGxlcnl9IGZyb20gXCIuL2dhbGxlcnlcIjtcclxuaW1wb3J0IHtDb21wb25lbnRWaWV3UGhvdG99IGZyb20gXCIuL3Bob3RvXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50Vmlld1NpbWlsYXJ9IGZyb20gXCIuL3NpbWlsYXJcIjtcclxuaW1wb3J0IHtDb21wb25lbnRWaWV3U29jaWFsc30gZnJvbSBcIi4vc29jaWFsc1wiO1xyXG5pbXBvcnQge0NvbXBvbmVudFZpZXdTcGVjaWZpY2F0aW9ufSBmcm9tIFwiLi9zcGVjaWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50Vmlld1RpdGxlfSBmcm9tIFwiLi90aXRsZVwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFZpZXdTZW99IGZyb20gXCIuL3Nlb1wiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDb21wb25lbnRWaWV3SW5mb3JtYXRpb24sXHJcbiAgICAgICAgQ29tcG9uZW50Vmlld0dhbGxlcnksXHJcbiAgICAgICAgQ29tcG9uZW50Vmlld1Bob3RvLFxyXG4gICAgICAgIENvbXBvbmVudFZpZXdTaW1pbGFyLFxyXG4gICAgICAgIENvbXBvbmVudFZpZXdTb2NpYWxzLFxyXG4gICAgICAgIENvbXBvbmVudFZpZXdTcGVjaWZpY2F0aW9uLFxyXG4gICAgICAgIENvbXBvbmVudFZpZXdUaXRsZSxcclxuICAgICAgICBDb21wb25lbnRWaWV3U2VvXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIFJvdXRlck1vZHVsZV0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENvbXBvbmVudFZpZXdJbmZvcm1hdGlvbixcclxuICAgICAgICBDb21wb25lbnRWaWV3R2FsbGVyeSxcclxuICAgICAgICBDb21wb25lbnRWaWV3UGhvdG8sXHJcbiAgICAgICAgQ29tcG9uZW50Vmlld1NpbWlsYXIsXHJcbiAgICAgICAgQ29tcG9uZW50Vmlld1NvY2lhbHMsXHJcbiAgICAgICAgQ29tcG9uZW50Vmlld1NwZWNpZmljYXRpb24sXHJcbiAgICAgICAgQ29tcG9uZW50Vmlld1RpdGxlLFxyXG4gICAgICAgIENvbXBvbmVudFZpZXdTZW9cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZHVsZUNvbXBvbmVudHNWaWV3IHtcclxuXHJcbn0iXX0=