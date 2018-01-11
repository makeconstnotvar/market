import { Component } from "@angular/core";
import { CategoryProvider } from "providers/index";
import { ContractProvider } from "../providers";
import { NavbarService } from "../services";
var DefaultLayout = (function () {
    function DefaultLayout(categoryProvider, contractProvider, navbarService) {
        var _this = this;
        categoryProvider.getTree().subscribe(function (response) { return _this.categories = response; });
        contractProvider.getCartStatus().subscribe(function (response) { return navbarService.updateCartData(response); });
    }
    DefaultLayout.decorators = [
        { type: Component, args: [{
                    selector: 'default',
                    host: { 'class': 'sticky' },
                    template: "\n        <div class=\"sticky-content\">\n            <market-navbar></market-navbar>\n            <jumbotron></jumbotron>\n            <market-menu [categories]=\"categories\"></market-menu>\n            <router-outlet></router-outlet>\n        </div>\n        <market-footer></market-footer>\n    "
                },] },
    ];
    DefaultLayout.ctorParameters = function () { return [
        { type: CategoryProvider, },
        { type: ContractProvider, },
        { type: NavbarService, },
    ]; };
    return DefaultLayout;
}());
export { DefaultLayout };
