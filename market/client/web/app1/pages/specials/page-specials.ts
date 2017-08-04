import {Component, OnInit} from "@angular/core";
import {CategoryProvider} from "providers/category";
import {Category} from "entities/category";
import {ProductProvider} from "providers/product";
import {Product} from "entities/product";
import {ContractProvider} from "providers/contract";
import {Color} from "entities/color";
import {Position} from "entities/position";
import {NavbarService} from "services/navbar";
import {Params} from "@angular/router";


@Component({
    template: `
<jumbotron></jumbotron>
<market-menu [categories]="categories"></market-menu>
<div class="container">
    <div class="row">
        <sp-welcome></sp-welcome>
        <sp-products [products]="products"  (onPostPosition)="postPosition($event)"></sp-products>
        
        <sp-promo></sp-promo>
        <sp-seo></sp-seo>
    </div>
</div>

`
})
export class PageSpecials implements OnInit {
    categories: Category[];
    products: Product[];

    constructor(private categoryProvider: CategoryProvider,
                private productProvider: ProductProvider,
                private contractProvider: ContractProvider,
                private navbarService: NavbarService) {

    }

    ngOnInit(): void {
        this.categoryProvider.getTree().subscribe(
            response => {
                this.categories = response
            });
        this.productProvider.special().subscribe(
            response => {
                this.products = response
            });

    }

    postPosition(product: Product) {
        let position: Position = <Position>{
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
            // color: new Color() //пока затычка
        };
        this.contractProvider.postPosition(position).subscribe(
            response => {
                console.log(response);
                this.navbarService.updateCartData(response)
            });

    }

}