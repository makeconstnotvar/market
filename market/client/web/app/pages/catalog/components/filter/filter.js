import { Component, EventEmitter, Input, Output } from "@angular/core";
var ComponentCatalogFilter = (function () {
    function ComponentCatalogFilter() {
        this.onFilterChange = new EventEmitter();
        this.onFilterApply = new EventEmitter();
        this.onFilterClear = new EventEmitter();
    }
    ComponentCatalogFilter.prototype.changeFilter = function (parameter) {
        this.onFilterChange.emit(parameter);
    };
    ComponentCatalogFilter.prototype.clearFilter = function () {
        this.onFilterClear.emit();
    };
    ComponentCatalogFilter.prototype.applyFilter = function () {
        this.onFilterApply.emit();
    };
    ComponentCatalogFilter.decorators = [
        { type: Component, args: [{
                    selector: 'cat-filter',
                    host: { 'class': 'product-menu' },
                    templateUrl: 'filter.html'
                },] },
    ];
    ComponentCatalogFilter.ctorParameters = function () { return []; };
    ComponentCatalogFilter.propDecorators = {
        "parameters": [{ type: Input },],
        "onFilterChange": [{ type: Output },],
        "onFilterApply": [{ type: Output },],
        "onFilterClear": [{ type: Output },],
    };
    return ComponentCatalogFilter;
}());
export { ComponentCatalogFilter };
