import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'filter-buttons',
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
