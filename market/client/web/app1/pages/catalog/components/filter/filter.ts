import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Parameter} from "models/parameter";
import {ParametersService} from "../../../../services/parameters";

@Component({
    selector: 'cat-filter',
    host:{'class':'product-menu'},
    templateUrl: 'filter.html'
})
export class ComponentCatalogFilter {

    @Input()
    parameters: Parameter[];

    @Output()
    onFilterChange = new EventEmitter();

    @Output()
    onFilterApply = new EventEmitter();

    @Output()
    onFilterClear = new EventEmitter();

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
