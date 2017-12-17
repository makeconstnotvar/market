import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SortingMode } from "models/sort";
import { SortingService } from "services/sort";
export class ComponentCatalogSorting {
    constructor(sortingService) {
        this.sortingService = sortingService;
        this.onSort = new EventEmitter();
        this.sortMode = SortingMode;
    }
    ngOnInit() {
        this.sorts = this.sortingService.getSorts();
    }
    ngOnChanges() {
        if (this.activeSort) {
            this.sorts = this.sortingService.change(this.activeSort);
        }
    }
    doSort(sort, mode) {
        this.sorts = this.sortingService.doSort(sort, mode);
        this.onSort.emit();
    }
}
ComponentCatalogSorting.decorators = [
    { type: Component, args: [{
                selector: 'cat-sorting',
                host: { 'class': 'sorting' },
                templateUrl: 'sorting.html'
            },] },
];
ComponentCatalogSorting.ctorParameters = () => [
    { type: SortingService, },
];
ComponentCatalogSorting.propDecorators = {
    "activeSort": [{ type: Input },],
    "onSort": [{ type: Output },],
};
//# sourceMappingURL=sorting.js.map