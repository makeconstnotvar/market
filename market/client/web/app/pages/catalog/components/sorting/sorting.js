import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SortingMode } from "models/sort";
import { SortingService } from "services/sort";
var ComponentCatalogSorting = (function () {
    function ComponentCatalogSorting(sortingService) {
        this.sortingService = sortingService;
        this.onSort = new EventEmitter();
        this.sortMode = SortingMode;
    }
    ComponentCatalogSorting.prototype.ngOnInit = function () {
        this.sorts = this.sortingService.getSorts();
    };
    ComponentCatalogSorting.prototype.ngOnChanges = function () {
        if (this.activeSort) {
            this.sorts = this.sortingService.change(this.activeSort);
        }
    };
    ComponentCatalogSorting.prototype.doSort = function (sort, mode) {
        this.sorts = this.sortingService.doSort(sort, mode);
        this.onSort.emit();
    };
    ComponentCatalogSorting.decorators = [
        { type: Component, args: [{
                    selector: 'cat-sorting',
                    templateUrl: 'sorting.html'
                },] },
    ];
    ComponentCatalogSorting.ctorParameters = function () { return [
        { type: SortingService, },
    ]; };
    ComponentCatalogSorting.propDecorators = {
        "activeSort": [{ type: Input },],
        "onSort": [{ type: Output },],
    };
    return ComponentCatalogSorting;
}());
export { ComponentCatalogSorting };
