import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { ApplicationModule } from '../module';
import { BrowserModule } from '@angular/platform-browser';
import { RootLayout } from "layouts/module";
import { UniversalInterceptor } from "services/index";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
export class ServerAppModule {
}
ServerAppModule.decorators = [
    { type: NgModule, args: [{
                bootstrap: [RootLayout],
                imports: [
                    BrowserModule.withServerTransition({
                        appId: 'BD484954-6626-4699-86BD-AF9CA21F0DE8'
                    }),
                    ServerModule,
                    ApplicationModule
                ],
                providers: [
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: UniversalInterceptor,
                        multi: true
                    }
                ]
            },] },
];
ServerAppModule.ctorParameters = () => [];
//# sourceMappingURL=module.js.map