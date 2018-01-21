import {Component} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {ContractProvider, ProductProvider} from "../../providers";
import {Config, Position, Product} from "../../models";
import {ConfigService, GlobalService, NavbarService, SeoService, ServerResponseService} from "../../services";


@Component({
    selector: 'view-page',
    templateUrl: 'view.html', providers: [ServerResponseService]
})
export class ViewPage {
    ready:boolean = false;
    product: Product = new Product;
    isBack: boolean;
    selectedImage: string;
    selectedIdx: number = 0;
    productId: string;
    categoryId: string;
    config: Config;
    url:string = this.configService.config.host+this.router.url;
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


    constructor(private serverResponseService: ServerResponseService,
                private productProvider: ProductProvider,
                private activatedRoute: ActivatedRoute,
                private contractProvider: ContractProvider,
                private navbarService: NavbarService,
                private configService: ConfigService,
                private globalService: GlobalService,
                private router: Router,
                private seoService: SeoService) {

        this.activatedRoute.params.subscribe((params: Params) => {
            this.productId = params['productId'];
            this.categoryId = params['categoryId'];
            this.productProvider.view(this.productId).subscribe(response => {
                if (response.notFoundUrl)
                    this.serverResponseService.setNotFound(response.notFoundUrl);
                else if (response.redirectUrl)
                    this.serverResponseService.setRedirect(response.redirectUrl);
                else {
                    this.product = response;
                    this.selectedImage = this.product.images[0];
                    this.seoService.setMeta({
                        title: this.product.title,
                        description: `${this.product.description} ${this.product.price} руб.`,
                        image: `/photos/${this.product._id}/${this.selectedImage}`,
                    });
                    this.ready = true;

                }

            })
        });
        //this.globalService.onScrollToEl.emit();
        this.globalService.existPreviousState.subscribe(state => this.isBack = true);
        this.config = this.configService.config;
    }

}