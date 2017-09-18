var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentSpecialsProduct } from "./product/product";
import { ComponentSpecialsSeo } from "./seo/seo";
import { ComponentSpecialsPromo } from "./promo/promo";
import { ComponentSpecialsProducts } from "./products/products";
import { ComponentSpecialsWelcome } from "./welcome/welcome";
import { RouterModule } from "@angular/router";
import { ControlsModule } from "controls/module";
let ModuleComponentsSpecials = class ModuleComponentsSpecials {
};
ModuleComponentsSpecials = __decorate([
    NgModule({
        declarations: [
            ComponentSpecialsProduct,
            ComponentSpecialsProducts,
            ComponentSpecialsPromo,
            ComponentSpecialsSeo,
            ComponentSpecialsWelcome
        ],
        imports: [
            BrowserModule,
            RouterModule,
            ControlsModule
        ],
        exports: [
            ComponentSpecialsProduct,
            ComponentSpecialsProducts,
            ComponentSpecialsPromo,
            ComponentSpecialsSeo,
            ComponentSpecialsWelcome
        ]
    })
], ModuleComponentsSpecials);
export { ModuleComponentsSpecials, ComponentSpecialsProduct, ComponentSpecialsProducts, ComponentSpecialsPromo, ComponentSpecialsSeo, ComponentSpecialsWelcome };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMvQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQXVCL0MsSUFBTSx3QkFBd0IsR0FBOUI7Q0FFQyxDQUFBO0FBRkssd0JBQXdCO0lBckI3QixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVix3QkFBd0I7WUFDeEIseUJBQXlCO1lBQ3pCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsd0JBQXdCO1NBQzNCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsYUFBYTtZQUNiLFlBQVk7WUFDWixjQUFjO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUN6QixzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtTQUMzQjtLQUNKLENBQUM7R0FDSSx3QkFBd0IsQ0FFN0I7QUFFRCxPQUFPLEVBQ0gsd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN4Qix5QkFBeUIsRUFDekIsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQix3QkFBd0IsRUFDM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtDb21wb25lbnRTcGVjaWFsc1Byb2R1Y3R9IGZyb20gXCIuL3Byb2R1Y3QvcHJvZHVjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFNwZWNpYWxzU2VvfSBmcm9tIFwiLi9zZW8vc2VvXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50U3BlY2lhbHNQcm9tb30gZnJvbSBcIi4vcHJvbW8vcHJvbW9cIjtcclxuaW1wb3J0IHtDb21wb25lbnRTcGVjaWFsc1Byb2R1Y3RzfSBmcm9tIFwiLi9wcm9kdWN0cy9wcm9kdWN0c1wiO1xyXG5pbXBvcnQge0NvbXBvbmVudFNwZWNpYWxzV2VsY29tZX0gZnJvbSBcIi4vd2VsY29tZS93ZWxjb21lXCI7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Q29udHJvbHNNb2R1bGV9IGZyb20gXCJjb250cm9scy9tb2R1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDb21wb25lbnRTcGVjaWFsc1Byb2R1Y3QsXHJcbiAgICAgICAgQ29tcG9uZW50U3BlY2lhbHNQcm9kdWN0cyxcclxuICAgICAgICBDb21wb25lbnRTcGVjaWFsc1Byb21vLFxyXG4gICAgICAgIENvbXBvbmVudFNwZWNpYWxzU2VvLFxyXG4gICAgICAgIENvbXBvbmVudFNwZWNpYWxzV2VsY29tZVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBDb250cm9sc01vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBDb21wb25lbnRTcGVjaWFsc1Byb2R1Y3QsXHJcbiAgICAgICAgQ29tcG9uZW50U3BlY2lhbHNQcm9kdWN0cyxcclxuICAgICAgICBDb21wb25lbnRTcGVjaWFsc1Byb21vLFxyXG4gICAgICAgIENvbXBvbmVudFNwZWNpYWxzU2VvLFxyXG4gICAgICAgIENvbXBvbmVudFNwZWNpYWxzV2VsY29tZVxyXG4gICAgXVxyXG59KVxyXG5jbGFzcyBNb2R1bGVDb21wb25lbnRzU3BlY2lhbHMge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIE1vZHVsZUNvbXBvbmVudHNTcGVjaWFscyxcclxuICAgIENvbXBvbmVudFNwZWNpYWxzUHJvZHVjdCxcclxuICAgIENvbXBvbmVudFNwZWNpYWxzUHJvZHVjdHMsXHJcbiAgICBDb21wb25lbnRTcGVjaWFsc1Byb21vLFxyXG4gICAgQ29tcG9uZW50U3BlY2lhbHNTZW8sXHJcbiAgICBDb21wb25lbnRTcGVjaWFsc1dlbGNvbWVcclxufVxyXG4iXX0=