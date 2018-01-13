import { Component } from "@angular/core";
import { ContractProvider, ProductProvider, SettingsProvider } from "providers/index";
import { ConfigService, NavbarService, SeoService } from "services/index";
export class SpecialsPage {
    constructor(productProvider, contractProvider, navbarService, seoService, settingsProvider, configService) {
        this.productProvider = productProvider;
        this.contractProvider = contractProvider;
        this.navbarService = navbarService;
        this.seoService = seoService;
        this.settingsProvider = settingsProvider;
        this.configService = configService;
        console.log(1);
    }
    ngOnInit() {
        console.log(2);
        let config = this.configService.config;
        this.productProvider.special().subscribe(response => {
            this.products = response;
        });
        this.settingsProvider.meta('specials').subscribe(meta => {
            meta.image = '/img/logo.jpg';
            this.seoService.setMeta(meta);
        });
    }
    postPosition(product) {
        let position = {
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
        };
        this.contractProvider.postPosition(position).subscribe(response => {
            console.log(response);
            this.navbarService.updateCartData(response);
        });
    }
}
SpecialsPage.decorators = [
    { type: Component, args: [{
                selector: 'specials',
                templateUrl: 'specials.html'
            },] },
];
SpecialsPage.ctorParameters = () => [
    { type: ProductProvider, },
    { type: ContractProvider, },
    { type: NavbarService, },
    { type: SeoService, },
    { type: SettingsProvider, },
    { type: ConfigService, },
];
//# sourceMappingURL=specials.js.map