import { Component } from "@angular/core";
import { Contract } from "models/index";
import { ContractProvider } from "providers/index";
import { ActivatedRoute } from "@angular/router";
export class HistoryPage {
    constructor(contractProvider, activatedRoute) {
        this.contractProvider = contractProvider;
        this.activatedRoute = activatedRoute;
        this.contract = new Contract;
        this.activatedRoute.params.subscribe((params) => {
            this.contractProvider.getById(params['contract']).subscribe(response => {
                this.contract = response;
            });
        });
    }
}
HistoryPage.decorators = [
    { type: Component, args: [{
                selector: 'cart-history',
                templateUrl: 'history.html'
            },] },
];
HistoryPage.ctorParameters = () => [
    { type: ContractProvider, },
    { type: ActivatedRoute, },
];
//# sourceMappingURL=history.js.map