import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Parameter} from "entities/parameter";
@Component({
    selector: 'filter-inputs',
    templateUrl: 'inputs.html'
})
export class ComponentFilterInputs {

    @Input()
    parameter: Parameter = new Parameter();

    @Output()
    onChangeFilter = new EventEmitter<Parameter>();

    changeFilter() {
        console.log(this.parameter);
        this.onChangeFilter.emit(this.parameter)
    }

    clearTo() {
        delete this.parameter.to;
        this.changeFilter()
    }

    clearFrom() {
        delete this.parameter.from;
        this.changeFilter()
    }
}
