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
import { ModuleComponents } from "components/module";
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
        imports: [BrowserModule, RouterModule, ModuleComponents],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNuRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDM0MsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQy9DLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNyRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBb0JuRCxJQUFhLHdCQUF3QixHQUFyQztDQUVDLENBQUE7QUFGWSx3QkFBd0I7SUFsQnBDLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLHdCQUF3QjtZQUN4Qix5QkFBeUI7WUFDekIsc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQix3QkFBd0I7U0FDM0I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFDLGdCQUFnQixDQUFDO1FBQ3ZELFNBQVMsRUFBRSxFQUFFO1FBQ2IsT0FBTyxFQUFFO1lBQ0wsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUN6QixzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtTQUMzQjtLQUNKLENBQUM7R0FDVyx3QkFBd0IsQ0FFcEM7U0FGWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50U3BlY2lhbHNQcm9kdWN0fSBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50U3BlY2lhbHNTZW99IGZyb20gXCIuL3Nlb1wiO1xyXG5pbXBvcnQge0NvbXBvbmVudFNwZWNpYWxzUHJvbW99IGZyb20gXCIuL3Byb21vXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50U3BlY2lhbHNQcm9kdWN0c30gZnJvbSBcIi4vcHJvZHVjdHNcIjtcclxuaW1wb3J0IHtDb21wb25lbnRTcGVjaWFsc1dlbGNvbWV9IGZyb20gXCIuL3dlbGNvbWVcIjtcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzfSBmcm9tIFwiY29tcG9uZW50cy9tb2R1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDb21wb25lbnRTcGVjaWFsc1Byb2R1Y3QsXHJcbiAgICAgICAgQ29tcG9uZW50U3BlY2lhbHNQcm9kdWN0cyxcclxuICAgICAgICBDb21wb25lbnRTcGVjaWFsc1Byb21vLFxyXG4gICAgICAgIENvbXBvbmVudFNwZWNpYWxzU2VvLFxyXG4gICAgICAgIENvbXBvbmVudFNwZWNpYWxzV2VsY29tZVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBSb3V0ZXJNb2R1bGUsTW9kdWxlQ29tcG9uZW50c10sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENvbXBvbmVudFNwZWNpYWxzUHJvZHVjdCxcclxuICAgICAgICBDb21wb25lbnRTcGVjaWFsc1Byb2R1Y3RzLFxyXG4gICAgICAgIENvbXBvbmVudFNwZWNpYWxzUHJvbW8sXHJcbiAgICAgICAgQ29tcG9uZW50U3BlY2lhbHNTZW8sXHJcbiAgICAgICAgQ29tcG9uZW50U3BlY2lhbHNXZWxjb21lXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2R1bGVDb21wb25lbnRzU3BlY2lhbHMge1xyXG5cclxufVxyXG4iXX0=