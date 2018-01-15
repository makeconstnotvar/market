import { Component, EventEmitter, Output } from "@angular/core";
export class ComponentCatalogAlert {
    constructor() {
        this.onClearFilter = new EventEmitter();
    }
    clearFilter() {
        this.onClearFilter.emit();
    }
}
ComponentCatalogAlert.decorators = [
    { type: Component, args: [{
                selector: 'cat-alert',
                host: { 'class': 'alert alert-info' },
                templateUrl: 'alert.html'
            },] },
];
ComponentCatalogAlert.ctorParameters = () => [];
ComponentCatalogAlert.propDecorators = {
    "onClearFilter": [{ type: Output },],
};
//# sourceMappingURL=alert.js.map