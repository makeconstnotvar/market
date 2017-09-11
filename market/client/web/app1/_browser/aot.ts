import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAppModuleNgFactory} from "./module.ngfactory";
import {enableProdMode} from "@angular/core";

enableProdMode();

function main() {
    platformBrowserDynamic().bootstrapModuleFactory(BrowserAppModuleNgFactory);
}

document.addEventListener('DOMContentLoaded', main, false);