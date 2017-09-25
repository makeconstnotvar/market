import {Component} from "@angular/core";
import {Contract} from "models/contract";
import {ContractProvider} from "providers";
import {CartMode} from "../components/mode";
import {NavbarService} from "services/navbar";
import {Product} from "models/product";

@Component({
    templateUrl: 'cart.html',
})
export class CartPage {
    history: any[] = [];
    cartMode = CartMode;
    contract: Contract = new Contract;
    pageMode: CartMode = CartMode.Empty;
    showHistory: boolean = false;
    showError: boolean = false;

    constructor(private contractProvider: ContractProvider,
                private navbarService: NavbarService) {
        this.contractProvider.getCart().subscribe(response => {
            this.contract = response.current;
            this.history = response.history;
            this.showHistory = this.history.length > 0;
            this.contract.final = this.getFinal(this.contract.positions);
            if (this.contract.positions && this.contract.positions.length > 0)
                this.pageMode = CartMode.Form;
        })
    }

    submit(contract) {
        this.contract = Object.assign(this.contract, contract);

            this.contractProvider.placeContract(this.contract).subscribe(response => {
                this.pageMode = CartMode.Success;
                this.history.unshift(response);
                this.navbarService.updateCartData({sum: 0, count: 0});
            });
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
            let product: Product = this.contract.positions[idx].product as Product;
            this.contract.positions[idx].sum = product.price * this.contract.positions[idx].count;
            this.contract.final = this.getFinal(this.contract.positions);
            this.contractProvider.put(this.contract).subscribe(response => {
                this.navbarService.updateCartData(response);
            });
        }
    }

    plus(idx) {
        this.contract.positions[idx].count++;
        let product: Product = this.contract.positions[idx].product as Product;
        this.contract.positions[idx].sum = product.price * this.contract.positions[idx].count;
        this.contract.final = this.getFinal(this.contract.positions);
        this.contractProvider.put(this.contract).subscribe(response => {
            this.navbarService.updateCartData(response);
        })

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
