import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Contract } from "models/index";
import { ContractProvider } from "providers/index";
import { GlobalService, NavbarService } from "services/index";
import { CartMode } from "../components/mode";
export class CartPage {
    constructor(contractProvider, navbarService, globalService, router) {
        this.contractProvider = contractProvider;
        this.navbarService = navbarService;
        this.globalService = globalService;
        this.router = router;
        this.history = [];
        this.cartMode = CartMode;
        this.isBack = false;
        this.contract = new Contract;
        this.pageMode = CartMode.Empty;
        this.showHistory = false;
        this.showError = false;
        this.contractProvider.getCart().subscribe(response => {
            this.contract = response.current;
            this.history = response.history;
            this.showHistory = this.history.length > 0;
            this.contract.final = this.getFinal(this.contract.positions);
            if (this.contract.positions && this.contract.positions.length > 0)
                this.pageMode = CartMode.Form;
        });
    }
    submit(contract) {
        this.contract = Object.assign(this.contract, contract);
        this.contractProvider.placeContract(this.contract).subscribe(response => {
            this.pageMode = CartMode.Success;
            this.history.unshift(response);
            this.navbarService.updateCartData({ sum: 0, count: 0 });
        });
    }
    back() {
        this.router.navigateByUrl(this.globalService.previousState.url);
    }
    del(idx) {
        this.contract.positions.splice(idx, 1);
        if (this.contract.positions.length == 0) {
            this.pageMode = CartMode.Empty;
        }
        this.contract.final = this.getFinal(this.contract.positions);
        this.contractProvider.put(this.contract).subscribe(response => {
            this.navbarService.updateCartData(response);
        });
    }
    minus(idx) {
        if (this.contract.positions[idx].count > 1) {
            this.contract.positions[idx].count--;
            let product = this.contract.positions[idx].product;
            this.contract.positions[idx].sum = product.price * this.contract.positions[idx].count;
            this.contract.final = this.getFinal(this.contract.positions);
            this.contractProvider.put(this.contract).subscribe(response => {
                this.navbarService.updateCartData(response);
            });
        }
    }
    plus(idx) {
        this.contract.positions[idx].count++;
        let product = this.contract.positions[idx].product;
        this.contract.positions[idx].sum = product.price * this.contract.positions[idx].count;
        this.contract.final = this.getFinal(this.contract.positions);
        this.contractProvider.put(this.contract).subscribe(response => {
            this.navbarService.updateCartData(response);
        });
    }
    getFinal(positions) {
        let sum = 0;
        if (positions)
            positions.forEach(position => {
                sum += position.sum;
            });
        return sum;
    }
}
CartPage.decorators = [
    { type: Component, args: [{
                selector: 'cart',
                host: { 'class': 'container d-block' },
                templateUrl: 'cart.html',
            },] },
];
CartPage.ctorParameters = () => [
    { type: ContractProvider, },
    { type: NavbarService, },
    { type: GlobalService, },
    { type: Router, },
];
//# sourceMappingURL=cart.js.map