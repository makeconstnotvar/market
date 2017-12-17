import { Component } from "@angular/core";
import { CategoryProvider } from "providers/index";
export class DefaultLayout {
    constructor(categoryProvider) {
        this.categoryProvider = categoryProvider;
    }
    ngOnInit() {
        this.categoryProvider.getTree().subscribe(response => {
            this.categories = response;
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
];
//# sourceMappingURL=default.js.map