var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RootLayout } from "./root";
import { DefaultLayout } from "./default";
let LayoutsModule = class LayoutsModule {
};
LayoutsModule = __decorate([
    NgModule({
        declarations: [
            RootLayout,
            DefaultLayout
        ],
        exports: [
            RootLayout,
            DefaultLayout
        ]
    })
], LayoutsModule);
export { LayoutsModule, RootLayout, DefaultLayout };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBWXhDLElBQU0sYUFBYSxHQUFuQjtDQUNDLENBQUE7QUFESyxhQUFhO0lBVmxCLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLFVBQVU7WUFDVixhQUFhO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsVUFBVTtZQUNWLGFBQWE7U0FDaEI7S0FDSixDQUFDO0dBQ0ksYUFBYSxDQUNsQjtBQUVELE9BQU8sRUFDSCxhQUFhLEVBQ2IsVUFBVSxFQUNWLGFBQWEsRUFDaEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1Jvb3RMYXlvdXR9IGZyb20gXCIuL3Jvb3RcIjtcbmltcG9ydCB7RGVmYXVsdExheW91dH0gZnJvbSBcIi4vZGVmYXVsdFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBSb290TGF5b3V0LFxuICAgICAgICBEZWZhdWx0TGF5b3V0XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFJvb3RMYXlvdXQsXG4gICAgICAgIERlZmF1bHRMYXlvdXRcbiAgICBdXG59KVxuY2xhc3MgTGF5b3V0c01vZHVsZSB7XG59XG5cbmV4cG9ydCB7XG4gICAgTGF5b3V0c01vZHVsZSxcbiAgICBSb290TGF5b3V0LFxuICAgIERlZmF1bHRMYXlvdXRcbn0iXX0=