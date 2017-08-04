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
import { ModuleComponents } from "components/module";
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
        imports: [BrowserModule, RouterModule, ModuleComponents, FormsModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQy9FLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBMkI3RCxJQUFhLHVCQUF1QixHQUFwQztDQUVDLENBQUE7QUFGWSx1QkFBdUI7SUF6Qm5DLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLHVCQUF1QjtZQUN2QixzQkFBc0I7WUFDdEIsdUJBQXVCO1lBQ3ZCLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtZQUMzQix3QkFBd0I7WUFDeEIscUJBQXFCO1NBQ3hCO1FBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLENBQUM7UUFDckUsT0FBTyxFQUFFO1lBQ0wsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDdkIscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDdkIsMkJBQTJCO1lBQzNCLHdCQUF3QjtZQUN4QixxQkFBcUI7U0FDeEI7S0FDSixDQUFDO0dBQ1csdUJBQXVCLENBRW5DO1NBRlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21wb25lbnRDYXRhbG9nU29ydGluZ30gZnJvbSBcIi4vc29ydGluZy9zb3J0aW5nXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50Q2F0YWxvZ0ZpbHRlcn0gZnJvbSBcIi4vZmlsdGVyL2ZpbHRlclwiO1xyXG5pbXBvcnQge0NvbXBvbmVudENhdGFsb2dQcm9kdWN0fSBmcm9tIFwiLi9wcm9kdWN0L3Byb2R1Y3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRDYXRhbG9nQWxlcnR9IGZyb20gXCIuL2FsZXJ0L2FsZXJ0XCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtNb2R1bGVDb21wb25lbnRzfSBmcm9tIFwiY29tcG9uZW50cy9tb2R1bGVcIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50RmlsdGVyQnV0dG9uc30gZnJvbSBcIi4vZmlsdGVyL2J1dHRvbnMvYnV0dG9uc1wiO1xyXG5pbXBvcnQge0NvbXBvbmVudEZpbHRlckNoZWNrYm94fSBmcm9tIFwiLi9maWx0ZXIvY2hlY2tib3gvY2hlY2tib3hcIjtcclxuaW1wb3J0IHtDb21wb25lbnRGaWx0ZXJDaGVja2JveGxpc3R9IGZyb20gXCIuL2ZpbHRlci9jaGVja2JveGxpc3QvY2hlY2tib3hsaXN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50RmlsdGVyUmFkaW9saXN0fSBmcm9tIFwiLi9maWx0ZXIvcmFkaW9saXN0L3JhZGlvbGlzdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudEZpbHRlcklucHV0c30gZnJvbSBcIi4vZmlsdGVyL2lucHV0cy9pbnB1dHNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDb21wb25lbnRDYXRhbG9nU29ydGluZyxcclxuICAgICAgICBDb21wb25lbnRDYXRhbG9nRmlsdGVyLFxyXG4gICAgICAgIENvbXBvbmVudENhdGFsb2dQcm9kdWN0LFxyXG4gICAgICAgIENvbXBvbmVudENhdGFsb2dBbGVydCxcclxuICAgICAgICBDb21wb25lbnRGaWx0ZXJCdXR0b25zLFxyXG4gICAgICAgIENvbXBvbmVudEZpbHRlckNoZWNrYm94LFxyXG4gICAgICAgIENvbXBvbmVudEZpbHRlckNoZWNrYm94bGlzdCxcclxuICAgICAgICBDb21wb25lbnRGaWx0ZXJSYWRpb2xpc3QsXHJcbiAgICAgICAgQ29tcG9uZW50RmlsdGVySW5wdXRzXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIFJvdXRlck1vZHVsZSwgTW9kdWxlQ29tcG9uZW50cywgRm9ybXNNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENvbXBvbmVudENhdGFsb2dTb3J0aW5nLFxyXG4gICAgICAgIENvbXBvbmVudENhdGFsb2dGaWx0ZXIsXHJcbiAgICAgICAgQ29tcG9uZW50Q2F0YWxvZ1Byb2R1Y3QsXHJcbiAgICAgICAgQ29tcG9uZW50Q2F0YWxvZ0FsZXJ0LFxyXG4gICAgICAgIENvbXBvbmVudEZpbHRlckJ1dHRvbnMsXHJcbiAgICAgICAgQ29tcG9uZW50RmlsdGVyQ2hlY2tib3gsXHJcbiAgICAgICAgQ29tcG9uZW50RmlsdGVyQ2hlY2tib3hsaXN0LFxyXG4gICAgICAgIENvbXBvbmVudEZpbHRlclJhZGlvbGlzdCxcclxuICAgICAgICBDb21wb25lbnRGaWx0ZXJJbnB1dHNcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZHVsZUNvbXBvbmVudHNDYXRhbG9nIHtcclxuXHJcbn0iXX0=