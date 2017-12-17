import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Product} from "models/product";

@Component({
    selector: 'sp-product',
    host: {'class': 'product'},
    templateUrl: 'product.html'
})
export class ComponentSpecialsProduct {


    @Input()
    product: Product;

    @Output()
    onPostPosition = new EventEmitter<Product>();

    postPosition(product) {
        product.inCart = true;
        this.onPostPosition.emit(product);
    }
}