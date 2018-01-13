import { Component } from "@angular/core";
import { CategoryProvider } from "providers/index";
import { ContractProvider } from "../providers";
import { NavbarService } from "../services";
export class DefaultLayout {
    constructor(categoryProvider, contractProvider, navbarService) {
        categoryProvider.getTree().subscribe(response => this.categories = response);
        contractProvider.getCartStatus().subscribe(response => navbarService.updateCartData(response));
    }
}
DefaultLayout.decorators = [
    { type: Component, args: [{
                selector: 'default',
                host: { 'class': 'sticky' },
                template: `
        <div class="sticky-content">
            <market-navbar></market-navbar>
            <jumbotron></jumbotron>
            <market-menu [categories]="categories"></market-menu>
            <router-outlet></router-outlet>
        </div>
        <market-footer></market-footer>
    `
            },] },
];
DefaultLayout.ctorParameters = () => [
    { type: CategoryProvider, },
    { type: ContractProvider, },
    { type: NavbarService, },
];
//# sourceMappingURL=default.js.map