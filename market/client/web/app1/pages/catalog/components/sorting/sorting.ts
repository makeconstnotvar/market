import {Component, Output, EventEmitter} from "@angular/core";
import {SortingMode} from "./mode";
import {Sort} from "./sort";

@Component({
    selector: 'cat-sorting',
    host:{'class':'sorting'},
    templateUrl: 'sorting.html'
})
export class ComponentCatalogSorting {

    @Output()
    onSort = new EventEmitter<Sort>();

    sorts: Sort[] = [
        {
            name: 'по названию',
            field: 'name',
            mode: SortingMode.Asc,
            active: true
        },
        {
            name: 'по цене',
            field: 'price',
            mode: SortingMode.Desc,
            active: false
        }
    ];
    sortMode = SortingMode;

    doSort(sort: Sort, mode: SortingMode) {
        let others = this.sorts.filter(s => s.field != sort.field);
        others.forEach(s => s.active = false);
        sort.active = true;
        sort.mode = mode;
        this.onSort.emit(sort);
    }
}