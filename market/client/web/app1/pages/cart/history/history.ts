import {Component} from "@angular/core";
import {Contract} from "entities/contract";
import {ContractProvider} from "providers/contract";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
    templateUrl: 'history.html'
})
export class PageHistory {
    contract: Contract = new Contract;

    constructor(private contractProvider:ContractProvider,
                private activatedRoute: ActivatedRoute){


        this.activatedRoute.params.subscribe((params: Params) => {
            this.contractProvider.getById(params['productId']).subscribe(response => {
                this.contract = response;
            })
        })

    }
}