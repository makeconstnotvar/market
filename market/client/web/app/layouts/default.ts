import {Component, ElementRef} from "@angular/core";
import {CategoryProvider, ContractProvider} from "../providers";
import {Category} from "../models";
import {GlobalService, NavbarService} from "../services";
import {PlatformService} from "../services/platform";


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
        <market-footer class="footer"></market-footer>
    `
})
export class DefaultLayout {
    categories: Category[];

    constructor(categoryProvider: CategoryProvider,
                contractProvider: ContractProvider,
                navbarService: NavbarService,
                globalService: GlobalService,
                elementRef: ElementRef,
                platformService:PlatformService) {


        categoryProvider.list().subscribe(response => this.categories = response);
        contractProvider.getCartStatus().subscribe(response => navbarService.updateCartData(response));


        globalService.onScrollToEl.subscribe((selector: string = 'market-navbar') => {
            if(platformService.isBrowser) {
                let el = elementRef.nativeElement.querySelector(selector);
                let viewportOffset = el.getBoundingClientRect();
                if (viewportOffset.top < 0)
                    el.scrollIntoView();
            }
        })
    }
}