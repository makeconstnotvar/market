import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductProvider, ContractProvider } from "providers/index";
import { Product } from "models/index";
import { GlobalService, SeoService, NavbarService, ConfigService } from "services/index";
export class ViewPage {
    constructor(productProvider, activatedRoute, contractProvider, navbarService, configService, globalService, router, seoService) {
        this.productProvider = productProvider;
        this.activatedRoute = activatedRoute;
        this.contractProvider = contractProvider;
        this.navbarService = navbarService;
        this.configService = configService;
        this.globalService = globalService;
        this.router = router;
        this.seoService = seoService;
        this.product = new Product;
        this.selectedIdx = 0;
        this.activatedRoute.params.subscribe((params) => {
            this.productId = params['productId'];
            this.categoryId = params['categoryId'];
            this.productProvider.view(this.productId).subscribe(response => {
                this.product = response;
                this.selectedImage = this.product.images[0];
                this.seoService.setMeta({
                    title: this.product.title,
                    description: `${this.product.description} ${this.product.price} руб.`,
                    keywords: this.product.keywords,
                    image: `/photos/${this.product._id}/${this.selectedImage}`,
                });
            });
        });
        this.globalService.existPreviousState.subscribe(state => this.isBack = true);
        this.config = this.configService.config;
    }
    imageSelect(idx) {
        this.selectedIdx = idx;
        this.selectedImage = this.product.images[idx];
    }
    back() {
        this.router.navigateByUrl(this.globalService.previousState.url);
    }
    postPosition(product) {
        let position = {
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
        };
        this.contractProvider.postPosition(position).subscribe(response => {
            this.navbarService.updateCartData(response);
        });
    }
}
ViewPage.decorators = [
    { type: Component, args: [{
                selector: 'view-page',
                templateUrl: 'view.html'
            },] },
];
ViewPage.ctorParameters = () => [
    { type: ProductProvider, },
    { type: ActivatedRoute, },
    { type: ContractProvider, },
    { type: NavbarService, },
    { type: ConfigService, },
    { type: GlobalService, },
    { type: Router, },
    { type: SeoService, },
];
//# sourceMappingURL=view.js.map