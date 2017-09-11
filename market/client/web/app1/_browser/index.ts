
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAppModule} from "./module";
import {enableProdMode} from "@angular/core";

enableProdMode();

function start() {
    platformBrowserDynamic().bootstrapModule(BrowserAppModule);
}

document.addEventListener('DOMContentLoaded', start, false);