import {Component, Input} from "@angular/core";
import {Product} from "models/product";
@Component({
    selector: 'cat-product',

    templateUrl: 'product.html'
})
export class ComponentCatalogProduct {
    @Input()
    product: Product;

    @Input()
    categoryId: string;
}