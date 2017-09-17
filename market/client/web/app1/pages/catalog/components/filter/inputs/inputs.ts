import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Parameter} from "models/parameter";

@Component({
    selector: 'filter-inputs',
    templateUrl: 'inputs.html'
})
export class ComponentFilterInputs {
    f1: boolean;
    f2: boolean;
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

    focus(f) {
        f = true;
    }

    blur(f) {
        f = false;
    }
}
