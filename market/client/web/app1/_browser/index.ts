import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserAppModule} from "./module";

enableProdMode();

function start() {
    platformBrowserDynamic().bootstrapModule(BrowserAppModule).catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded', start, false);