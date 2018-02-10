import {NgModule} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {ApplicationModule} from '../module';
import {RootLayout} from "layouts/module";
import {TransferHttpCacheModule} from '@nguniversal/common'
import {RequestInterceptor} from "../services";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
@NgModule({
    bootstrap: [RootLayout],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'BD484954-6626-4699-86BD-AF9CA21F0DE8'
        }),

        ApplicationModule,
        BrowserTransferStateModule
    ],
    providers:[
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true,
        }
    ]
})
export class BrowserAppModule {

}