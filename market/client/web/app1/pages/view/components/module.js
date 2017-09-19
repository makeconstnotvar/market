var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ComponentViewInformation } from "./information/information";
import { ComponentViewGallery } from "./gallery/gallery";
import { ComponentViewPhoto } from "./photo/photo";
import { ComponentViewSimilar } from "./similar/similar";
import { ComponentViewSocials } from "./socials/socials";
import { ComponentViewSpecification } from "./specification/specification";
import { ComponentViewTitle } from "./title/title";
import { ComponentViewSeo } from "./seo/seo";
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
export { ModuleComponentsView, ComponentViewInformation, ComponentViewGallery, ComponentViewPhoto, ComponentViewSimilar, ComponentViewSocials, ComponentViewSpecification, ComponentViewTitle, ComponentViewSeo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQTJCM0MsSUFBTSxvQkFBb0IsR0FBMUI7Q0FFQyxDQUFBO0FBRkssb0JBQW9CO0lBeEJ6QixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVix3QkFBd0I7WUFDeEIsb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLDBCQUEwQjtZQUMxQixrQkFBa0I7WUFDbEIsZ0JBQWdCO1NBQ25CO1FBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQztRQUN0QyxTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRTtZQUNMLHdCQUF3QjtZQUN4QixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsMEJBQTBCO1lBQzFCLGtCQUFrQjtZQUNsQixnQkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ0ksb0JBQW9CLENBRXpCO0FBQ0QsT0FBTyxFQUNILG9CQUFvQixFQUNwQix3QkFBd0IsRUFDeEIsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLDBCQUEwQixFQUMxQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ25CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50Vmlld0luZm9ybWF0aW9ufSBmcm9tIFwiLi9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvblwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFZpZXdHYWxsZXJ5fSBmcm9tIFwiLi9nYWxsZXJ5L2dhbGxlcnlcIjtcclxuaW1wb3J0IHtDb21wb25lbnRWaWV3UGhvdG99IGZyb20gXCIuL3Bob3RvL3Bob3RvXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50Vmlld1NpbWlsYXJ9IGZyb20gXCIuL3NpbWlsYXIvc2ltaWxhclwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFZpZXdTb2NpYWxzfSBmcm9tIFwiLi9zb2NpYWxzL3NvY2lhbHNcIjtcclxuaW1wb3J0IHtDb21wb25lbnRWaWV3U3BlY2lmaWNhdGlvbn0gZnJvbSBcIi4vc3BlY2lmaWNhdGlvbi9zcGVjaWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50Vmlld1RpdGxlfSBmcm9tIFwiLi90aXRsZS90aXRsZVwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFZpZXdTZW99IGZyb20gXCIuL3Nlby9zZW9cIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ29tcG9uZW50Vmlld0luZm9ybWF0aW9uLFxyXG4gICAgICAgIENvbXBvbmVudFZpZXdHYWxsZXJ5LFxyXG4gICAgICAgIENvbXBvbmVudFZpZXdQaG90byxcclxuICAgICAgICBDb21wb25lbnRWaWV3U2ltaWxhcixcclxuICAgICAgICBDb21wb25lbnRWaWV3U29jaWFscyxcclxuICAgICAgICBDb21wb25lbnRWaWV3U3BlY2lmaWNhdGlvbixcclxuICAgICAgICBDb21wb25lbnRWaWV3VGl0bGUsXHJcbiAgICAgICAgQ29tcG9uZW50Vmlld1Nlb1xyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBDb21wb25lbnRWaWV3SW5mb3JtYXRpb24sXHJcbiAgICAgICAgQ29tcG9uZW50Vmlld0dhbGxlcnksXHJcbiAgICAgICAgQ29tcG9uZW50Vmlld1Bob3RvLFxyXG4gICAgICAgIENvbXBvbmVudFZpZXdTaW1pbGFyLFxyXG4gICAgICAgIENvbXBvbmVudFZpZXdTb2NpYWxzLFxyXG4gICAgICAgIENvbXBvbmVudFZpZXdTcGVjaWZpY2F0aW9uLFxyXG4gICAgICAgIENvbXBvbmVudFZpZXdUaXRsZSxcclxuICAgICAgICBDb21wb25lbnRWaWV3U2VvXHJcbiAgICBdXHJcbn0pXHJcbmNsYXNzIE1vZHVsZUNvbXBvbmVudHNWaWV3IHtcclxuXHJcbn1cclxuZXhwb3J0IHtcclxuICAgIE1vZHVsZUNvbXBvbmVudHNWaWV3LFxyXG4gICAgQ29tcG9uZW50Vmlld0luZm9ybWF0aW9uLFxyXG4gICAgQ29tcG9uZW50Vmlld0dhbGxlcnksXHJcbiAgICBDb21wb25lbnRWaWV3UGhvdG8sXHJcbiAgICBDb21wb25lbnRWaWV3U2ltaWxhcixcclxuICAgIENvbXBvbmVudFZpZXdTb2NpYWxzLFxyXG4gICAgQ29tcG9uZW50Vmlld1NwZWNpZmljYXRpb24sXHJcbiAgICBDb21wb25lbnRWaWV3VGl0bGUsXHJcbiAgICBDb21wb25lbnRWaWV3U2VvXHJcbn0iXX0=