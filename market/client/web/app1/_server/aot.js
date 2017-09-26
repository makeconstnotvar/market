import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { ServerAppModuleNgFactory } from './module.ngfactory';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode } from "@angular/core";
enableProdMode();
var expressEngine = ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory
});
export { expressEngine };
