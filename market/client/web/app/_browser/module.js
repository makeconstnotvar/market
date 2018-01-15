import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationModule } from '../module';
import { RootLayout } from "layouts/module";
var BrowserAppModule = (function () {
    function BrowserAppModule() {
    }
    BrowserAppModule.decorators = [
        { type: NgModule, args: [{
                    bootstrap: [RootLayout],
                    imports: [
                        BrowserModule.withServerTransition({
                            appId: 'BD484954-6626-4699-86BD-AF9CA21F0DE8'
                        }),
                        ApplicationModule,
                    ]
                },] },
    ];
    BrowserAppModule.ctorParameters = function () { return []; };
    return BrowserAppModule;
}());
export { BrowserAppModule };
