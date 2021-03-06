import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {NgModule} from '@angular/core';
import {ApplicationModule} from '../module';
import {BrowserModule} from '@angular/platform-browser';
import {RootLayout} from "layouts/module";
import {UniversalInterceptor} from "../services";
import {HTTP_INTERCEPTORS} from "@angular/common/http";


@NgModule({
    bootstrap: [RootLayout],

    imports: [
        BrowserModule.withServerTransition({
            appId: 'BD484954-6626-4699-86BD-AF9CA21F0DE8'
        }),
        ApplicationModule,
        ServerModule,
        ServerTransferStateModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UniversalInterceptor,
            multi: true
        }

    ]
})
export class ServerAppModule {

}