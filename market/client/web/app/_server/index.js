import 'core-js/es7/reflect';
import 'zone.js/dist/zone-node';
import { ServerAppModuleNgFactory } from './module.ngfactory.js';
import { ngExpressEngine } from '@nguniversal/express-engine/src/main';
import { enableProdMode } from "@angular/core";
enableProdMode();
let expressEngine = (providers) => {
    return ngExpressEngine({
        bootstrap: ServerAppModuleNgFactory,
        providers: providers
    });
};
const ɵ0 = expressEngine;
export { expressEngine };
export { ɵ0 };
//# sourceMappingURL=index.js.map