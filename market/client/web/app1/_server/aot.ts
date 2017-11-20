import 'zone.js/dist/zone-node';

import {ServerAppModuleNgFactory} from './module.ngfactory.js';
import {ngExpressEngine} from '@nguniversal/express-engine/src/main';
import {enableProdMode} from "@angular/core";

enableProdMode();
let expressEngine = ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory
});

export {expressEngine};