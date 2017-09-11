import {Component, Input, Output, EventEmitter, trigger, state, style, transition, animate} from "@angular/core";
import {Product} from "models";
@Component({
    selector: 'price',
    host: {'class': 'price'},

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