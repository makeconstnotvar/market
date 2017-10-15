import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Contract} from "models/contract";
@Component({
    selector: 'cart-positions',

    templateUrl: 'positions.html'
})
export class ComponentCartPositions {
    @Input()
    contract: Contract;

    @Output()
    onMinus = new EventEmitter<number>();

    @Output()
    onPlus = new EventEmitter<number>();

    @Output()
    onDelete = new EventEmitter<number>();

    minus(idx) {
        this.onMinus.emit(idx);
    }

    plus(idx) {
        this.onPlus.emit(idx);
    }

    del(idx) {
        this.onDelete.emit(idx);
    }
}