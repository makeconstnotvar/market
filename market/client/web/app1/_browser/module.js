var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationModule } from '../module';
import { RootLayout } from "layouts/module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
let BrowserAppModule = class BrowserAppModule {
};
BrowserAppModule = __decorate([
    NgModule({
        bootstrap: [RootLayout],
        imports: [
            BrowserModule.withServerTransition({
                appId: 'D3BC8453-6C51-4847-97D4-F8238DB69B0D'
            }),
            BrowserAnimationsModule,
            ApplicationModule
        ]
    })
], BrowserAppModule);
export { BrowserAppModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFZN0UsSUFBYSxnQkFBZ0IsR0FBN0I7Q0FFQyxDQUFBO0FBRlksZ0JBQWdCO0lBVjVCLFFBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUN2QixPQUFPLEVBQUU7WUFDTCxhQUFhLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLEtBQUssRUFBRSxzQ0FBc0M7YUFDaEQsQ0FBQztZQUNGLHVCQUF1QjtZQUN2QixpQkFBaUI7U0FDcEI7S0FDSixDQUFDO0dBQ1csZ0JBQWdCLENBRTVCO1NBRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7QXBwbGljYXRpb25Nb2R1bGV9IGZyb20gJy4uL21vZHVsZSc7XHJcbmltcG9ydCB7Um9vdExheW91dH0gZnJvbSBcImxheW91dHMvbW9kdWxlXCI7XHJcbmltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtSb290TGF5b3V0XSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLndpdGhTZXJ2ZXJUcmFuc2l0aW9uKHtcclxuICAgICAgICAgICAgYXBwSWQ6ICdEM0JDODQ1My02QzUxLTQ4NDctOTdENC1GODIzOERCNjlCMEQnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICAgICAgQXBwbGljYXRpb25Nb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJyb3dzZXJBcHBNb2R1bGUge1xyXG5cclxufSJdfQ==