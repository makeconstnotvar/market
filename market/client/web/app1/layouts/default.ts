import {Component} from "@angular/core";
import {CategoryProvider} from "providers";
import {Category} from "models";


@Component({
    selector: 'default',

    template: `
        <market-navbar></market-navbar>
        <jumbotron></jumbotron>
        <market-menu [categories]="categories"></market-menu>
        <router-outlet></router-outlet>
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