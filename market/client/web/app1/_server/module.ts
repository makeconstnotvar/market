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
            appId: 'D3BC8453-6C51-4847-97D4-F8238DB69B0D'
        }),
        ServerModule,
        NoopAnimationsModule,
        ApplicationModule
    ],
})
export class ServerAppModule {

}