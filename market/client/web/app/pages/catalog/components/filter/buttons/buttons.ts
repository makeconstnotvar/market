import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'filter-buttons',
    host:{'class':'d-flex'},
    templateUrl: 'buttons.html'
})
export class ComponentFilterButtons {

    @Output()
    onApplyFilter = new EventEmitter();

    @Output()
    onClearFilter = new EventEmitter();

    applyFilter() {
        this.onApplyFilter.emit()
    }

    clearFilter() {
        this.onClearFilter.emit()
    }

}
