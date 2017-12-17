import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Sort, SortingMode} from "models/sort";
import {SortingService} from "services/sort";

@Component({
    selector: 'cat-sorting',
    host: {'class': 'sorting'},
    templateUrl: 'sorting.html'
})
export class ComponentCatalogSorting {

    @Input()
    activeSort: string;

    @Output()
    onSort = new EventEmitter();

    sorts: Sort[];

    sortMode = SortingMode;

    constructor(private sortingService: SortingService) {
    }

    ngOnInit() {
        this.sorts = this.sortingService.getSorts();
    }

    ngOnChanges() {
        if (this.activeSort) {
            this.sorts = this.sortingService.change(this.activeSort)
        }
    }

    doSort(sort: Sort, mode: SortingMode) {
        this.sorts = this.sortingService.doSort(sort, mode);
        this.onSort.emit();
    }
}