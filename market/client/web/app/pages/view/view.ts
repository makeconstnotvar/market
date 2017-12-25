import {Component  } from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {ProductProvider,ContractProvider} from "providers/index";
import {Product,Config,Position} from "models/index";
import {GlobalService,SeoService,NavbarService,ConfigService} from "services/index";


@Component({
    selector:'view-page',
    templateUrl: 'view.html'
})
export class ViewPage {
    product: Product = new Product;
    isBack: boolean;
    selectedImage: string;
    selectedIdx: number=0;
    productId: string;
    categoryId: string;
    config: Config;

    imageSelect(idx) {
        this.selectedIdx = idx;
        this.selectedImage = this.product.images[idx];
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
        this.contractProvider.postPosition(position).subscribe(response => {
                this.navbarService.updateCartData(response)
            });
    }



    constructor(private productProvider: ProductProvider,
                private activatedRoute: ActivatedRoute,
                private contractProvider: ContractProvider,
                private navbarService: NavbarService,
                private configService: ConfigService,
                private globalService: GlobalService,
                private router: Router,
                private seoService:SeoService) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.productId = params['productId'];
            this.categoryId = params['categoryId'];
            this.productProvider.view(this.productId).subscribe(response => {
                this.product = response;
                this.selectedImage = this.product.images[0];
                this.seoService.setMeta({
                    title:this.product.title,
                    description: `${this.product.description} ${this.product.price} руб.`,
                    keywords: this.product.keywords,
                    image: `/photos/${this.product._id}/${this.selectedImage}`,
                })
            })
        });

        this.globalService.existPreviousState.subscribe(state => this.isBack = true);
        this.config = this.configService.config;
    }
}