import {Component} from "@angular/core";
import {CategoryProvider} from "providers/index";
import {Category} from "models/index";
import {ContractProvider} from "../providers";
import {NavbarService} from "../services";


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
                navbarService: NavbarService) {
        categoryProvider.getTree().subscribe(response => this.categories = response);
        contractProvider.getCartStatus().subscribe(response => navbarService.updateCartData(response))
    }
}