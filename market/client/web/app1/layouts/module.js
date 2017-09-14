var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RootLayout } from "./root";
import { DefaultLayout } from "./default";
import { RouterModule } from "@angular/router";
import { ControlsModule } from "controls/module";
let LayoutsModule = class LayoutsModule {
};
LayoutsModule = __decorate([
    NgModule({
        declarations: [
            RootLayout,
            DefaultLayout
        ],
        imports: [
            RouterModule,
            ControlsModule
        ],
        exports: [
            RootLayout,
            DefaultLayout
        ]
    })
], LayoutsModule);
export { LayoutsModule, RootLayout, DefaultLayout };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFnQi9DLElBQU0sYUFBYSxHQUFuQjtDQUNDLENBQUE7QUFESyxhQUFhO0lBZGxCLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLFVBQVU7WUFDVixhQUFhO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsWUFBWTtZQUNaLGNBQWM7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDTCxVQUFVO1lBQ1YsYUFBYTtTQUNoQjtLQUNKLENBQUM7R0FDSSxhQUFhLENBQ2xCO0FBRUQsT0FBTyxFQUNILGFBQWEsRUFDYixVQUFVLEVBQ1YsYUFBYSxFQUNoQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb290TGF5b3V0fSBmcm9tIFwiLi9yb290XCI7XHJcbmltcG9ydCB7RGVmYXVsdExheW91dH0gZnJvbSBcIi4vZGVmYXVsdFwiO1xyXG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0NvbnRyb2xzTW9kdWxlfSBmcm9tIFwiY29udHJvbHMvbW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgUm9vdExheW91dCxcclxuICAgICAgICBEZWZhdWx0TGF5b3V0XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBDb250cm9sc01vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBSb290TGF5b3V0LFxyXG4gICAgICAgIERlZmF1bHRMYXlvdXRcclxuICAgIF1cclxufSlcclxuY2xhc3MgTGF5b3V0c01vZHVsZSB7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBMYXlvdXRzTW9kdWxlLFxyXG4gICAgUm9vdExheW91dCxcclxuICAgIERlZmF1bHRMYXlvdXRcclxufSJdfQ==