
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ModuleApplication} from "./module";
import {enableProdMode} from "@angular/core";

enableProdMode();

platformBrowserDynamic().bootstrapModule(ModuleApplication);