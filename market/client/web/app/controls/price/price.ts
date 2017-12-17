import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Product} from "models/index";

@Component({
    selector: 'price',
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