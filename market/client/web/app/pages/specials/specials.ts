import {Component, OnInit} from "@angular/core";
import {Category, Position, Product} from "models/index";
import {ContractProvider, ProductProvider, SettingsProvider} from "providers/index";
import {ConfigService, NavbarService, SeoService} from "services/index";

@Component({
    selector: 'specials',
    templateUrl: 'specials.html'
})
export class SpecialsPage implements OnInit{
    categories: Category[];
    products: Product[];

    constructor(private productProvider: ProductProvider,
                private contractProvider: ContractProvider,
                private navbarService: NavbarService,
                private seoService: SeoService,
                private settingsProvider: SettingsProvider,
                private configService: ConfigService) {
        //console.log(1)
    }

    ngOnInit() {
        //console.log(2);
        let config = this.configService.config;
        this.productProvider.special().subscribe(
            response => {
                this.products = response
            });
        this.settingsProvider.meta('specials').subscribe(meta => {
            meta.image = '/img/logo.jpg';
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
                //console.log(response);
                this.navbarService.updateCartData(response)
            });

    }

}