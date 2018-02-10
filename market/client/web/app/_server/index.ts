import 'core-js/es7/reflect';
import 'zone.js/dist/zone-node';

import {ServerAppModuleNgFactory} from './module.ngfactory';
import {ngExpressEngine} from '@nguniversal/express-engine/src/main';
import {enableProdMode} from "@angular/core";
import * as xhr2 from 'xhr2';

xhr2.prototype._restrictedHeaders = {};
enableProdMode();
let expressEngine = (providers) => {
    return ngExpressEngine({
        bootstrap: ServerAppModuleNgFactory,
        providers: providers
    });
};

export {expressEngine};