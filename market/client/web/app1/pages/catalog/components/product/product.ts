import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Product} from "models/product";

@Component({
    selector: 'cat-product',
    host: {'class': 'd-flex'},
    templateUrl: 'product.html'
})
export class ComponentCatalogProduct {
    @Input()
    product: Product;

    @Input()
    categoryName: string;

    @Output()
    onPostPosition = new EventEmitter<Product>();

    postPosition() {
        this.onPostPosition.emit(this.product);
    }
}