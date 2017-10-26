import {Component, OnInit} from "@angular/core";
import {Category} from "models/category";
import {ProductProvider} from "providers";
import {Product} from "models/product";
import {ContractProvider} from "providers";
import {Position} from "models/position";
import {NavbarService} from "services/navbar";
import {SeoService} from "services/seo1";
import {SettingsProvider} from "../../providers/settings";


@Component({
    selector: 'specials',
    templateUrl: 'specials.html'
})
export class SpecialsPage implements OnInit {
    categories: Category[];
    products: Product[];

    constructor(
                private productProvider: ProductProvider,
                private contractProvider: ContractProvider,
                private navbarService: NavbarService,
                private seoService:SeoService,
                private settingsProvider:SettingsProvider) {
    }

    ngOnInit(): void {

        this.productProvider.special().subscribe(
            response => {
                this.products = response
            });
        this.settingsProvider.meta('specials').subscribe(meta=>{
            this.seoService.setMeta(meta)
        })

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