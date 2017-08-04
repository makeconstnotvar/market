var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ModuleComponents } from "components/module";
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
        imports: [BrowserModule, RouterModule, FormsModule, ModuleComponents],
        providers: [],
        exports: [
            ComponentCartPositions,
            ComponentCartHistory,
            ComponentCartContact
        ]
    })
], ModuleComponentsCart);
export { ModuleComponentsCart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFnQjNDLElBQWEsb0JBQW9CLEdBQWpDO0NBRUMsQ0FBQTtBQUZZLG9CQUFvQjtJQWRoQyxRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVixzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtTQUN2QjtRQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixDQUFDO1FBQ25FLFNBQVMsRUFBRSxFQUFFO1FBQ2IsT0FBTyxFQUFFO1lBQ0wsc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQixvQkFBb0I7U0FDdkI7S0FDSixDQUFDO0dBQ1csb0JBQW9CLENBRWhDO1NBRlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzfSBmcm9tIFwiY29tcG9uZW50cy9tb2R1bGVcIjtcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbXBvbmVudENhcnRQb3NpdGlvbnN9IGZyb20gXCIuL3Bvc2l0aW9ucy9wb3NpdGlvbnNcIjtcclxuaW1wb3J0IHtDb21wb25lbnRDYXJ0SGlzdG9yeX0gZnJvbSBcIi4vaGlzdG9yeS9oaXN0b3J5XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50Q2FydENvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3QvY29udGFjdFwiO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDb21wb25lbnRDYXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIENvbXBvbmVudENhcnRIaXN0b3J5LFxyXG4gICAgICAgIENvbXBvbmVudENhcnRDb250YWN0XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIFJvdXRlck1vZHVsZSxGb3Jtc01vZHVsZSxNb2R1bGVDb21wb25lbnRzXSxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgQ29tcG9uZW50Q2FydFBvc2l0aW9ucyxcclxuICAgICAgICBDb21wb25lbnRDYXJ0SGlzdG9yeSxcclxuICAgICAgICBDb21wb25lbnRDYXJ0Q29udGFjdFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kdWxlQ29tcG9uZW50c0NhcnQge1xyXG5cclxufVxyXG4iXX0=