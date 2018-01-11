import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ContractProvider, ProductProvider } from "../../providers";
import { Product } from "../../models";
import { ConfigService, GlobalService, NavbarService, SeoService, ServerResponseService1 } from "../../services";
var ViewPage = (function () {
    function ViewPage(serverResponseService, productProvider, activatedRoute, contractProvider, navbarService, configService, globalService, router, seoService) {
        var _this = this;
        this.serverResponseService = serverResponseService;
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
        this.activatedRoute.params.subscribe(function (params) {
            _this.productId = params['productId'];
            _this.categoryId = params['categoryId'];
            _this.productProvider.view(_this.productId).subscribe(function (response) {
                if (response.notFoundUrl)
                    _this.serverResponseService.setNotFound(response.notFoundUrl);
                if (response.redirectUrl)
                    _this.serverResponseService.setRedirect(response.redirectUrl);
                else {
                    _this.product = response;
                    _this.selectedImage = _this.product.images[0];
                    _this.seoService.setMeta({
                        title: _this.product.title,
                        description: _this.product.description + " " + _this.product.price + " \u0440\u0443\u0431.",
                        keywords: _this.product.keywords,
                        image: "/photos/" + _this.product._id + "/" + _this.selectedImage,
                    });
                }
            });
        });
        this.globalService.existPreviousState.subscribe(function (state) { return _this.isBack = true; });
        this.config = this.configService.config;
    }
    ViewPage.prototype.imageSelect = function (idx) {
        this.selectedIdx = idx;
        this.selectedImage = this.product.images[idx];
    };
    ViewPage.prototype.back = function () {
        this.router.navigateByUrl(this.globalService.previousState.url);
    };
    ViewPage.prototype.postPosition = function (product) {
        var _this = this;
        var position = {
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
        };
        this.contractProvider.postPosition(position).subscribe(function (response) {
            _this.navbarService.updateCartData(response);
        });
    };
    ViewPage.decorators = [
        { type: Component, args: [{
                    selector: 'view-page',
                    templateUrl: 'view.html', providers: [ServerResponseService1]
                },] },
    ];
    ViewPage.ctorParameters = function () { return [
        { type: ServerResponseService1, },
        { type: ProductProvider, },
        { type: ActivatedRoute, },
        { type: ContractProvider, },
        { type: NavbarService, },
        { type: ConfigService, },
        { type: GlobalService, },
        { type: Router, },
        { type: SeoService, },
    ]; };
    return ViewPage;
}());
export { ViewPage };
