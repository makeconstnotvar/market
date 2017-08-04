import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Product} from "entities/product";
@Component({
    selector: 'sp-products',

    template: `
<h2 class="col-xs-12">Самое интересное</h2>
<sp-product (onPostPosition)="postPosition($event)"  class="special-product mm-special col-md-3 col-sm-4 col-xs-12" [ngClass]="{'hidden-lg hidden-md':last}" *ngFor="let product of products;let last = last;" [product]="product"></sp-product>

    
`
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