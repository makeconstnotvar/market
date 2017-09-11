import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Product} from "models/product";

@Component({
    selector: 'sp-product',
    host: {'class': 'product'},
    template: `
<div class="special-product__image col-xxs-12 col-xs-6 col-sm-12">
    <a class="special-product__image-link" routerLink="/{{product.caturl}}/{{product.url}}">
        <img fade-in src="/photos/{{product._id}}/l_{{product.cover}}">
    </a>
</div>
<div class="special-product__info col-xxs-12 col-xs-6 col-sm-12">
    <a class="special-product__name" routerLink="/{{product.caturl}}/{{product.url}}">{{product.name}}</a>
    <price (onPostPosition)="postPosition($event)" [product]="product"></price>
</div>`
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