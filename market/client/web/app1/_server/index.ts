import 'core-js/es7/reflect';
import 'zone.js/dist/zone-node';

import {ServerAppModule} from './module';
import {ngExpressEngine} from '@nguniversal/express-engine/src/main';
import {enableProdMode} from "@angular/core";

enableProdMode();
let expressEngine = ngExpressEngine({
    bootstrap: ServerAppModule
});

export {expressEngine};