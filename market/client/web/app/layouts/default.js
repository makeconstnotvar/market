import { Component, ElementRef } from "@angular/core";
import { CategoryProvider } from "providers/index";
import { ContractProvider } from "../providers";
import { NavbarService } from "../services";
import { GlobalService } from "../services/global";
export class DefaultLayout {
    constructor(categoryProvider, contractProvider, navbarService, globalService, elementRef) {
        categoryProvider.getTree().subscribe(response => this.categories = response);
        contractProvider.getCartStatus().subscribe(response => navbarService.updateCartData(response));
        globalService.onScrollToEl.subscribe((selector = 'market-navbar') => {
            elementRef.nativeElement.querySelector(selector).scrollIntoView();
        });
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
    { type: GlobalService, },
    { type: ElementRef, },
];
//# sourceMappingURL=default.js.map