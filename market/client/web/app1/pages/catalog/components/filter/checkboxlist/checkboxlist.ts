import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Parameter,  ParamValue} from "entities/parameter";
@Component({
    selector: 'filter-checkboxlist',
    templateUrl: 'checkboxlist.html'
})
export class ComponentFilterCheckboxlist {

    @Input()
    parameter:Parameter = new Parameter();

    @Output()
    onChangeFilter = new EventEmitter<Parameter>();

    changeFilter() {
        this.onChangeFilter.emit(this.parameter)
    }

}
