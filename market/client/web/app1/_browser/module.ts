import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ApplicationModule} from '../module';
import {RootLayout} from "layouts/module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    bootstrap: [RootLayout],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'D3BC8453-6C51-4847-97D4-F8238DB69B0D'
        }),
        BrowserAnimationsModule,
        ApplicationModule
    ]
})
export class BrowserAppModule {

}