import { Component } from "@angular/core";
import { Contract } from "models/index";
import { ContractProvider } from "providers/index";
import { ActivatedRoute } from "@angular/router";
var HistoryPage = (function () {
    function HistoryPage(contractProvider, activatedRoute) {
        var _this = this;
        this.contractProvider = contractProvider;
        this.activatedRoute = activatedRoute;
        this.contract = new Contract;
        this.activatedRoute.params.subscribe(function (params) {
            _this.contractProvider.getById(params['contract']).subscribe(function (response) {
                _this.contract = response;
            });
        });
    }
    HistoryPage.decorators = [
        { type: Component, args: [{
                    selector: 'cart-history',
                    templateUrl: 'history.html'
                },] },
    ];
    HistoryPage.ctorParameters = function () { return [
        { type: ContractProvider, },
        { type: ActivatedRoute, },
    ]; };
    return HistoryPage;
}());
export { HistoryPage };
