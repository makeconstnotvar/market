import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Product} from "models/product";

@Component({
    selector: 'cat-product',
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
        this.product.inCart = true;
        this.onPostPosition.emit(this.product);
    }
}