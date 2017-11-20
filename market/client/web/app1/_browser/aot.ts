
import 'zone.js/dist/zone';

import {enableProdMode} from "@angular/core";
//import {platformBrowser} from "@angular/platform-browser";
import {BrowserAppModuleNgFactory} from "./module.ngfactory.js";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

enableProdMode();

function start() {
  platformBrowserDynamic().bootstrapModuleFactory(BrowserAppModuleNgFactory).catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', start, false);