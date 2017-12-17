import {Component} from "@angular/core";
import {CategoryProvider} from "providers/index";
import {Category} from "models/index";


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
    constructor(private categoryProvider: CategoryProvider) {

    }

    categories: Category[];

    ngOnInit() {
        this.categoryProvider.getTree().subscribe(
            response => {
                this.categories = response
            });
    }
}