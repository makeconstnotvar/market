import {Component, EventEmitter, Output} from "@angular/core";
@Component({
    selector: 'cat-alert',
    host: {'class': 'alert alert-info'},
    templateUrl: 'alert.html'
})
export class ComponentCatalogAlert {
    @Output()
    onClearFilter = new EventEmitter();

    clearFilter() {
        this.onClearFilter.emit()
    }

}
