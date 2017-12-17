import {Component} from "@angular/core";
import {Contract} from "models/index";
import {ContractProvider} from "providers/index";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
    selector: 'cart-history',
    templateUrl: 'history.html'
})
export class HistoryPage {
    contract: Contract = new Contract;

    constructor(private contractProvider: ContractProvider,
                private activatedRoute: ActivatedRoute) {


        this.activatedRoute.params.subscribe((params: Params) => {
            this.contractProvider.getById(params['contract']).subscribe(response => {
                this.contract = response;
            })
        })

    }
}