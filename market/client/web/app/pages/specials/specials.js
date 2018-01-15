import { Component } from "@angular/core";
import { ContractProvider, ProductProvider, SettingsProvider } from "providers/index";
import { ConfigService, NavbarService, SeoService } from "services/index";
var SpecialsPage = (function () {
    function SpecialsPage(productProvider, contractProvider, navbarService, seoService, settingsProvider, configService) {
        this.productProvider = productProvider;
        this.contractProvider = contractProvider;
        this.navbarService = navbarService;
        this.seoService = seoService;
        this.settingsProvider = settingsProvider;
        this.configService = configService;
        console.log(1);
    }
    SpecialsPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log(2);
        var config = this.configService.config;
        this.productProvider.special().subscribe(function (response) {
            _this.products = response;
        });
        this.settingsProvider.meta('specials').subscribe(function (meta) {
            meta.image = '/img/logo.jpg';
            _this.seoService.setMeta(meta);
        });
    };
    SpecialsPage.prototype.postPosition = function (product) {
        var _this = this;
        var position = {
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
        };
        this.contractProvider.postPosition(position).subscribe(function (response) {
            console.log(response);
            _this.navbarService.updateCartData(response);
        });
    };
    SpecialsPage.decorators = [
        { type: Component, args: [{
                    selector: 'specials',
                    templateUrl: 'specials.html'
                },] },
    ];
    SpecialsPage.ctorParameters = function () { return [
        { type: ProductProvider, },
        { type: ContractProvider, },
        { type: NavbarService, },
        { type: SeoService, },
        { type: SettingsProvider, },
        { type: ConfigService, },
    ]; };
    return SpecialsPage;
}());
export { SpecialsPage };
