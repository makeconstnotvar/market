import {Component, OnInit} from "@angular/core";
import {ProductProvider} from "providers";
import {Product} from "models/product";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ConfigService} from "services/config";
import {Config} from "models/config";
import {Color} from "models/color";
import {ContractProvider} from "providers";
import {NavbarService} from "services/navbar";
import {Position} from "models/position";
import {GlobalService} from "services/global";


@Component({
    templateUrl: 'view.html'
})
export class ViewPage {
    product: Product = new Product;
    isBack: boolean;
    selectedImage: string;
    productId: string;
    categoryId: string;
    config: Config;

    imageSelect(image) {
        this.selectedImage = image;
    }

    back() {
        this.router.navigateByUrl(this.globalService.previousState.url)
    }

    postPosition(product: Product) {
        let position: Position = <Position>{
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
            //color: new Color() //пока затычка
        };
        this.contractProvider.postPosition(position).subscribe(
            response => {
                console.log(response);
                this.navbarService.updateCartData(response)
            });
    }



    constructor(private productProvider: ProductProvider,
                private activatedRoute: ActivatedRoute,
                private contractProvider: ContractProvider,
                private navbarService: NavbarService,
                private configService: ConfigService,
                private globalService: GlobalService,
                private router: Router) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.productId = params['productId'];
            this.categoryId = params['categoryId'];
            this.productProvider.view(this.productId).subscribe(response => {
                this.product = response;
                this.selectedImage = this.product.images[0]
            })
        });

        this.globalService.existPreviousState.subscribe(state => this.isBack = true);
        this.config = this.configService.config;
    }
}