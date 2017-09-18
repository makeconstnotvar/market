import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Product} from "models/product";
@Component({
    selector: 'sp-products',

    templateUrl: 'products.html'
})
export class ComponentSpecialsProducts {

    @Input()
    products: Product[];

    @Output()
    onPostPosition = new EventEmitter<Product>();

    postPosition(product) {
        this.onPostPosition.emit(product);
    }
}