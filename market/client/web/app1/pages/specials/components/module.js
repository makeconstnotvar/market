var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentSpecialsProduct } from "./product";
import { ComponentSpecialsSeo } from "./seo";
import { ComponentSpecialsPromo } from "./promo";
import { ComponentSpecialsProducts } from "./products";
import { ComponentSpecialsWelcome } from "./welcome";
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
        providers: [],
        exports: [
            ComponentSpecialsProduct,
            ComponentSpecialsProducts,
            ComponentSpecialsPromo,
            ComponentSpecialsSeo,
            ComponentSpecialsWelcome
        ]
    })
], ModuleComponentsSpecials);
export { ModuleComponentsSpecials };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNuRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDM0MsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQy9DLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNyRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQXdCL0MsSUFBYSx3QkFBd0IsR0FBckM7Q0FFQyxDQUFBO0FBRlksd0JBQXdCO0lBdEJwQyxRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVix3QkFBd0I7WUFDeEIseUJBQXlCO1lBQ3pCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsd0JBQXdCO1NBQzNCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsYUFBYTtZQUNiLFlBQVk7WUFDWixjQUFjO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUU7WUFDTCx3QkFBd0I7WUFDeEIseUJBQXlCO1lBQ3pCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsd0JBQXdCO1NBQzNCO0tBQ0osQ0FBQztHQUNXLHdCQUF3QixDQUVwQztTQUZZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtDb21wb25lbnRTcGVjaWFsc1Byb2R1Y3R9IGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRTcGVjaWFsc1Nlb30gZnJvbSBcIi4vc2VvXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50U3BlY2lhbHNQcm9tb30gZnJvbSBcIi4vcHJvbW9cIjtcclxuaW1wb3J0IHtDb21wb25lbnRTcGVjaWFsc1Byb2R1Y3RzfSBmcm9tIFwiLi9wcm9kdWN0c1wiO1xyXG5pbXBvcnQge0NvbXBvbmVudFNwZWNpYWxzV2VsY29tZX0gZnJvbSBcIi4vd2VsY29tZVwiO1xyXG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0NvbnRyb2xzTW9kdWxlfSBmcm9tIFwiY29udHJvbHMvbW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ29tcG9uZW50U3BlY2lhbHNQcm9kdWN0LFxyXG4gICAgICAgIENvbXBvbmVudFNwZWNpYWxzUHJvZHVjdHMsXHJcbiAgICAgICAgQ29tcG9uZW50U3BlY2lhbHNQcm9tbyxcclxuICAgICAgICBDb21wb25lbnRTcGVjaWFsc1NlbyxcclxuICAgICAgICBDb21wb25lbnRTcGVjaWFsc1dlbGNvbWVcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgQ29udHJvbHNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENvbXBvbmVudFNwZWNpYWxzUHJvZHVjdCxcclxuICAgICAgICBDb21wb25lbnRTcGVjaWFsc1Byb2R1Y3RzLFxyXG4gICAgICAgIENvbXBvbmVudFNwZWNpYWxzUHJvbW8sXHJcbiAgICAgICAgQ29tcG9uZW50U3BlY2lhbHNTZW8sXHJcbiAgICAgICAgQ29tcG9uZW50U3BlY2lhbHNXZWxjb21lXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2R1bGVDb21wb25lbnRzU3BlY2lhbHMge1xyXG5cclxufVxyXG4iXX0=