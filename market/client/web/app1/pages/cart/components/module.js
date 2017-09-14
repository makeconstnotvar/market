var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ControlsModule } from "controls/module";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ComponentCartPositions } from "./positions/positions";
import { ComponentCartHistory } from "./history/history";
import { ComponentCartContact } from "./contact/contact";
import { FormsModule } from "@angular/forms";
let ModuleComponentsCart = class ModuleComponentsCart {
};
ModuleComponentsCart = __decorate([
    NgModule({
        declarations: [
            ComponentCartPositions,
            ComponentCartHistory,
            ComponentCartContact
        ],
        imports: [
            BrowserModule,
            RouterModule,
            FormsModule,
            ControlsModule
        ],
        providers: [],
        exports: [
            ComponentCartPositions,
            ComponentCartHistory,
            ComponentCartContact
        ]
    })
], ModuleComponentsCart);
export { ModuleComponentsCart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBcUIzQyxJQUFhLG9CQUFvQixHQUFqQztDQUVDLENBQUE7QUFGWSxvQkFBb0I7SUFuQmhDLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsb0JBQW9CO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsYUFBYTtZQUNiLFlBQVk7WUFDWixXQUFXO1lBQ1gsY0FBYztTQUNqQjtRQUNELFNBQVMsRUFBRSxFQUFFO1FBQ2IsT0FBTyxFQUFFO1lBQ0wsc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQixvQkFBb0I7U0FDdkI7S0FDSixDQUFDO0dBQ1csb0JBQW9CLENBRWhDO1NBRlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250cm9sc01vZHVsZX0gZnJvbSBcImNvbnRyb2xzL21vZHVsZVwiO1xyXG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50Q2FydFBvc2l0aW9uc30gZnJvbSBcIi4vcG9zaXRpb25zL3Bvc2l0aW9uc1wiO1xyXG5pbXBvcnQge0NvbXBvbmVudENhcnRIaXN0b3J5fSBmcm9tIFwiLi9oaXN0b3J5L2hpc3RvcnlcIjtcclxuaW1wb3J0IHtDb21wb25lbnRDYXJ0Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0XCI7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIENvbXBvbmVudENhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgQ29tcG9uZW50Q2FydEhpc3RvcnksXHJcbiAgICAgICAgQ29tcG9uZW50Q2FydENvbnRhY3RcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQ29udHJvbHNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENvbXBvbmVudENhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgQ29tcG9uZW50Q2FydEhpc3RvcnksXHJcbiAgICAgICAgQ29tcG9uZW50Q2FydENvbnRhY3RcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZHVsZUNvbXBvbmVudHNDYXJ0IHtcclxuXHJcbn1cclxuIl19