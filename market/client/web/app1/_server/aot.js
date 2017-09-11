"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
var module_ngfactory_1 = require("./module.ngfactory");
var express_engine_1 = require("@nguniversal/express-engine");
var core_1 = require("@angular/core");
core_1.enableProdMode();
var expressEngine = express_engine_1.ngExpressEngine({
    bootstrap: module_ngfactory_1.ServerAppModuleNgFactory
});
exports.expressEngine = expressEngine;
