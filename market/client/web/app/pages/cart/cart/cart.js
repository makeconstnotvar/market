import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Contract } from "models/index";
import { ContractProvider } from "providers/index";
import { GlobalService, NavbarService } from "services/index";
import { CartMode } from "../components/mode";
import { SettingsProvider } from "../../../providers";
import { SeoService } from "../../../services";
var CartPage = (function () {
    function CartPage(contractProvider, navbarService, globalService, router, settingsProvider, seoService) {
        var _this = this;
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
        this.globalService.existPreviousState.subscribe(function (state) { return _this.isBack = true; });
        this.contractProvider.getCart().subscribe(function (response) {
            _this.contract = response.current;
            _this.history = response.history;
            _this.showHistory = _this.history.length > 0;
            _this.contract.final = _this.getFinal(_this.contract.positions);
            if (_this.contract.positions && _this.contract.positions.length > 0)
                _this.pageMode = CartMode.Form;
        });
        settingsProvider.meta('cart').subscribe(function (resp) {
            seoService.setMeta(resp);
        });
    }
    CartPage.prototype.submit = function (contract) {
        var _this = this;
        this.contract = Object.assign(this.contract, contract);
        this.contractProvider.placeContract(this.contract).subscribe(function (response) {
            _this.pageMode = CartMode.Success;
            _this.history.unshift(response);
            _this.navbarService.updateCartData({ sum: 0, count: 0 });
        });
    };
    CartPage.prototype.back = function () {
        this.router.navigateByUrl(this.globalService.previousState.url);
    };
    CartPage.prototype.del = function (idx) {
        var _this = this;
        this.contract.positions.splice(idx, 1);
        if (this.contract.positions.length == 0) {
            this.pageMode = CartMode.Empty;
        }
        this.contract.final = this.getFinal(this.contract.positions);
        this.contractProvider.put(this.contract).subscribe(function (response) {
            _this.navbarService.updateCartData(response);
        });
    };
    CartPage.prototype.minus = function (idx) {
        var _this = this;
        if (this.contract.positions[idx].count > 1) {
            this.contract.positions[idx].count--;
            var product = this.contract.positions[idx].product;
            this.contract.positions[idx].sum = product.price * this.contract.positions[idx].count;
            this.contract.final = this.getFinal(this.contract.positions);
            this.contractProvider.put(this.contract).subscribe(function (response) {
                _this.navbarService.updateCartData(response);
            });
        }
    };
    CartPage.prototype.plus = function (idx) {
        var _this = this;
        this.contract.positions[idx].count++;
        var product = this.contract.positions[idx].product;
        this.contract.positions[idx].sum = product.price * this.contract.positions[idx].count;
        this.contract.final = this.getFinal(this.contract.positions);
        this.contractProvider.put(this.contract).subscribe(function (response) {
            _this.navbarService.updateCartData(response);
        });
    };
    CartPage.prototype.getFinal = function (positions) {
        var sum = 0;
        if (positions)
            positions.forEach(function (position) {
                sum += position.sum;
            });
        return sum;
    };
    CartPage.decorators = [
        { type: Component, args: [{
                    selector: 'cart',
                    host: { 'class': 'container d-block' },
                    templateUrl: 'cart.html',
                },] },
    ];
    CartPage.ctorParameters = function () { return [
        { type: ContractProvider, },
        { type: NavbarService, },
        { type: GlobalService, },
        { type: Router, },
        { type: SettingsProvider, },
        { type: SeoService, },
    ]; };
    return CartPage;
}());
export { CartPage };
