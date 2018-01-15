import { Component, EventEmitter, Output } from "@angular/core";
var ComponentCatalogAlert = (function () {
    function ComponentCatalogAlert() {
        this.onClearFilter = new EventEmitter();
    }
    ComponentCatalogAlert.prototype.clearFilter = function () {
        this.onClearFilter.emit();
    };
    ComponentCatalogAlert.decorators = [
        { type: Component, args: [{
                    selector: 'cat-alert',
                    host: { 'class': 'alert alert-info' },
                    templateUrl: 'alert.html'
                },] },
    ];
    ComponentCatalogAlert.ctorParameters = function () { return []; };
    ComponentCatalogAlert.propDecorators = {
        "onClearFilter": [{ type: Output },],
    };
    return ComponentCatalogAlert;
}());
export { ComponentCatalogAlert };
