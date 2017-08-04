import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Parameter,  ParamValue} from "entities/parameter";
@Component({
    selector: 'filter-radiolist',
    templateUrl: 'radiolist.html'
})
export class ComponentFilterRadiolist {


    @Input()
    parameter:Parameter = new Parameter();

    @Output()
    onChangeFilter = new EventEmitter<Parameter>();

    changeFilter(vid) {
        
        this.parameter.values.forEach(v=>v.selected=v._id==vid);
        this.onChangeFilter.emit(this.parameter)
    }

}
