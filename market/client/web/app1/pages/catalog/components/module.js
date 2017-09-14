var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { ComponentCatalogSorting } from "./sorting/sorting";
import { ComponentCatalogFilter } from "./filter/filter";
import { ComponentCatalogProduct } from "./product/product";
import { ComponentCatalogAlert } from "./alert/alert";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ControlsModule } from "controls/module";
import { FormsModule } from "@angular/forms";
import { ComponentFilterButtons } from "./filter/buttons/buttons";
import { ComponentFilterCheckbox } from "./filter/checkbox/checkbox";
import { ComponentFilterCheckboxlist } from "./filter/checkboxlist/checkboxlist";
import { ComponentFilterRadiolist } from "./filter/radiolist/radiolist";
import { ComponentFilterInputs } from "./filter/inputs/inputs";
let ModuleComponentsCatalog = class ModuleComponentsCatalog {
};
ModuleComponentsCatalog = __decorate([
    NgModule({
        declarations: [
            ComponentCatalogSorting,
            ComponentCatalogFilter,
            ComponentCatalogProduct,
            ComponentCatalogAlert,
            ComponentFilterButtons,
            ComponentFilterCheckbox,
            ComponentFilterCheckboxlist,
            ComponentFilterRadiolist,
            ComponentFilterInputs
        ],
        imports: [
            BrowserModule,
            RouterModule,
            FormsModule,
            ControlsModule
        ],
        exports: [
            ComponentCatalogSorting,
            ComponentCatalogFilter,
            ComponentCatalogProduct,
            ComponentCatalogAlert,
            ComponentFilterButtons,
            ComponentFilterCheckbox,
            ComponentFilterCheckboxlist,
            ComponentFilterRadiolist,
            ComponentFilterInputs
        ]
    })
], ModuleComponentsCatalog);
export { ModuleComponentsCatalog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQWdDN0QsSUFBYSx1QkFBdUIsR0FBcEM7Q0FFQyxDQUFBO0FBRlksdUJBQXVCO0lBOUJuQyxRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBQ3RCLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLHVCQUF1QjtZQUN2QiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLHFCQUFxQjtTQUN4QjtRQUNELE9BQU8sRUFBRTtZQUNMLGFBQWE7WUFDYixZQUFZO1lBQ1osV0FBVztZQUNYLGNBQWM7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBdUI7WUFDdkIsc0JBQXNCO1lBQ3RCLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLHVCQUF1QjtZQUN2QiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLHFCQUFxQjtTQUN4QjtLQUNKLENBQUM7R0FDVyx1QkFBdUIsQ0FFbkM7U0FGWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbXBvbmVudENhdGFsb2dTb3J0aW5nfSBmcm9tIFwiLi9zb3J0aW5nL3NvcnRpbmdcIjtcclxuaW1wb3J0IHtDb21wb25lbnRDYXRhbG9nRmlsdGVyfSBmcm9tIFwiLi9maWx0ZXIvZmlsdGVyXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50Q2F0YWxvZ1Byb2R1Y3R9IGZyb20gXCIuL3Byb2R1Y3QvcHJvZHVjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudENhdGFsb2dBbGVydH0gZnJvbSBcIi4vYWxlcnQvYWxlcnRcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0NvbnRyb2xzTW9kdWxlfSBmcm9tIFwiY29udHJvbHMvbW9kdWxlXCI7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0NvbXBvbmVudEZpbHRlckJ1dHRvbnN9IGZyb20gXCIuL2ZpbHRlci9idXR0b25zL2J1dHRvbnNcIjtcclxuaW1wb3J0IHtDb21wb25lbnRGaWx0ZXJDaGVja2JveH0gZnJvbSBcIi4vZmlsdGVyL2NoZWNrYm94L2NoZWNrYm94XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50RmlsdGVyQ2hlY2tib3hsaXN0fSBmcm9tIFwiLi9maWx0ZXIvY2hlY2tib3hsaXN0L2NoZWNrYm94bGlzdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudEZpbHRlclJhZGlvbGlzdH0gZnJvbSBcIi4vZmlsdGVyL3JhZGlvbGlzdC9yYWRpb2xpc3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRGaWx0ZXJJbnB1dHN9IGZyb20gXCIuL2ZpbHRlci9pbnB1dHMvaW5wdXRzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ29tcG9uZW50Q2F0YWxvZ1NvcnRpbmcsXHJcbiAgICAgICAgQ29tcG9uZW50Q2F0YWxvZ0ZpbHRlcixcclxuICAgICAgICBDb21wb25lbnRDYXRhbG9nUHJvZHVjdCxcclxuICAgICAgICBDb21wb25lbnRDYXRhbG9nQWxlcnQsXHJcbiAgICAgICAgQ29tcG9uZW50RmlsdGVyQnV0dG9ucyxcclxuICAgICAgICBDb21wb25lbnRGaWx0ZXJDaGVja2JveCxcclxuICAgICAgICBDb21wb25lbnRGaWx0ZXJDaGVja2JveGxpc3QsXHJcbiAgICAgICAgQ29tcG9uZW50RmlsdGVyUmFkaW9saXN0LFxyXG4gICAgICAgIENvbXBvbmVudEZpbHRlcklucHV0c1xyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBDb250cm9sc01vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBDb21wb25lbnRDYXRhbG9nU29ydGluZyxcclxuICAgICAgICBDb21wb25lbnRDYXRhbG9nRmlsdGVyLFxyXG4gICAgICAgIENvbXBvbmVudENhdGFsb2dQcm9kdWN0LFxyXG4gICAgICAgIENvbXBvbmVudENhdGFsb2dBbGVydCxcclxuICAgICAgICBDb21wb25lbnRGaWx0ZXJCdXR0b25zLFxyXG4gICAgICAgIENvbXBvbmVudEZpbHRlckNoZWNrYm94LFxyXG4gICAgICAgIENvbXBvbmVudEZpbHRlckNoZWNrYm94bGlzdCxcclxuICAgICAgICBDb21wb25lbnRGaWx0ZXJSYWRpb2xpc3QsXHJcbiAgICAgICAgQ29tcG9uZW50RmlsdGVySW5wdXRzXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2R1bGVDb21wb25lbnRzQ2F0YWxvZyB7XHJcblxyXG59Il19