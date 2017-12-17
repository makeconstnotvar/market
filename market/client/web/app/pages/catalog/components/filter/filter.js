import { Component, EventEmitter, Input, Output } from "@angular/core";
export class ComponentCatalogFilter {
    constructor() {
        this.onFilterChange = new EventEmitter();
        this.onFilterApply = new EventEmitter();
        this.onFilterClear = new EventEmitter();
    }
    changeFilter(parameter) {
        this.onFilterChange.emit(parameter);
    }
    clearFilter() {
        this.onFilterClear.emit();
    }
    applyFilter() {
        this.onFilterApply.emit();
    }
}
ComponentCatalogFilter.decorators = [
    { type: Component, args: [{
                selector: 'cat-filter',
                host: { 'class': 'product-menu' },
                templateUrl: 'filter.html'
            },] },
];
ComponentCatalogFilter.ctorParameters = () => [];
ComponentCatalogFilter.propDecorators = {
    "parameters": [{ type: Input },],
    "onFilterChange": [{ type: Output },],
    "onFilterApply": [{ type: Output },],
    "onFilterClear": [{ type: Output },],
};
//# sourceMappingURL=filter.js.map