import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { enableProdMode } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { BrowserAppModuleNgFactory } from "./module.ngfactory.js";
enableProdMode();
function start() {
    platformBrowser().bootstrapModuleFactory(BrowserAppModuleNgFactory).catch(function (err) { return console.log(err); });
}
document.addEventListener('DOMContentLoaded', start, false);
