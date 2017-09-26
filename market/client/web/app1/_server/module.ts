import {ServerModule} from '@angular/platform-server';
import {NgModule} from '@angular/core';
import {ApplicationModule} from '../module';
import {BrowserModule} from '@angular/platform-browser';
import {RootLayout} from "layouts/module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
    bootstrap: [RootLayout],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'BD484954-6626-4699-86BD-AF9CA21F0DE8'
        }),
        ServerModule,
        NoopAnimationsModule,
        ApplicationModule
    ],
})
export class ServerAppModule {

}