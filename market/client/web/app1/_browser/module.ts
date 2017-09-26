import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ApplicationModule} from '../module';
import {RootLayout} from "layouts/module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    bootstrap: [RootLayout],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'BD484954-6626-4699-86BD-AF9CA21F0DE8'
        }),
        BrowserAnimationsModule,
        ApplicationModule
    ]
})
export class BrowserAppModule {

}