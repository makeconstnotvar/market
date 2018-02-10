import {Component, ElementRef} from "@angular/core";
import {CategoryProvider, ContractProvider} from "../providers";
import {Category} from "../models";
import {GlobalService, NavbarService} from "../services";



@Component({
    selector: 'default',
    host: {'class': 'sticky'},
    template: `
        <div class="sticky-content">
            <market-navbar></market-navbar>
            <jumbotron></jumbotron>
            <market-menu [categories]="categories"></market-menu>
            <router-outlet></router-outlet>
        </div>
        <market-footer></market-footer>
    `
})
export class DefaultLayout {
    categories: Category[];

    constructor(categoryProvider: CategoryProvider,
                contractProvider: ContractProvider,
                navbarService: NavbarService,
                globalService: GlobalService,
                elementRef: ElementRef) {


        categoryProvider.list().subscribe(response => this.categories = response);
        contractProvider.getCartStatus().subscribe(response => navbarService.updateCartData(response));


        globalService.onScrollToEl.subscribe((selector: string = 'market-navbar') => {
            elementRef.nativeElement.querySelector(selector).scrollIntoView();
        })
    }
}