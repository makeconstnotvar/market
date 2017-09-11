"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
var module_1 = require("./module");
var main_1 = require("@nguniversal/express-engine/src/main");
var expressEngine = main_1.ngExpressEngine({
    bootstrap: module_1.ServerAppModule
});
exports.expressEngine = expressEngine;
