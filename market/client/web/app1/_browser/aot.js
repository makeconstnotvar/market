"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var module_ngfactory_1 = require("./module.ngfactory");
var core_1 = require("@angular/core");
core_1.enableProdMode();
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModuleFactory(module_ngfactory_1.BrowserAppModuleNgFactory);
}
document.addEventListener('DOMContentLoaded', main, false);
