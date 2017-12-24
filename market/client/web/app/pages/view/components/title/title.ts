import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'v-title',
    host: {'class': 'me-info col-xs-12'},
    templateUrl: 'title.html'
})
export class ComponentViewTitle {

    @Input()
    name: string;

    @Input()
    details: string;

    @Input()
    isBack: boolean;

    @Output()
    onBack = new EventEmitter();

    back() {
        this.onBack.emit()
    }
}