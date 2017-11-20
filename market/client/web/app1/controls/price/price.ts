import {Component, Input, Output, EventEmitter} from "@angular/core";

import {animate, state, style, transition, trigger} from "@angular/animations";
import {Product} from "models/index";
@Component({
    selector: 'price',
    animations: [
        trigger('inCartChanged', [
            state('true', style({opacity: 1})),
            state('false', style({opacity: 0})),
            transition('* => *', animate('300ms linear'))
        ])
    ],
    templateUrl: 'price.html'
})
export class PriceControl {

    @Input()
    product:Product;

    @Output()
    onPostPosition = new EventEmitter<Product>();

    postPosition(product) {
        product.inCart = true;
        this.onPostPosition.emit(product);
    }
}