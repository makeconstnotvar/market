import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Parameter,  ParamValue} from "models/parameter";
@Component({
    selector: 'filter-checkbox',
    host: {'class': 'checkbox'},
    templateUrl: 'checkbox.html'
})
export class ComponentFilterCheckbox {


    @Input()
    parameter:Parameter = new Parameter();

    @Output()
    onChangeFilter = new EventEmitter<Parameter>();

    changeFilter() {
        this.onChangeFilter.emit(this.parameter)
    }



}
