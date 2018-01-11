import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { ApplicationModule } from '../module';
import { BrowserModule } from '@angular/platform-browser';
import { RootLayout } from "layouts/module";
import { UniversalInterceptor } from "../services";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
var ServerAppModule = (function () {
    function ServerAppModule() {
    }
    ServerAppModule.decorators = [
        { type: NgModule, args: [{
                    bootstrap: [RootLayout],
                    imports: [
                        BrowserModule.withServerTransition({
                            appId: 'BD484954-6626-4699-86BD-AF9CA21F0DE8'
                        }),
                        ApplicationModule,
                        ServerModule
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
    ServerAppModule.ctorParameters = function () { return []; };
    return ServerAppModule;
}());
export { ServerAppModule };
