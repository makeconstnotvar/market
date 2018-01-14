import { Component } from "@angular/core";
import { NavbarService } from "services/index";
var NavbarControl = (function () {
    function NavbarControl(navbarService) {
        var _this = this;
        this.navbarService = navbarService;
        this.settings = {
            brand: {
                icon: 'fa-shopping-bag',
                name: 'GetYourBag.ru',
                label: 'Москва',
                link: '/'
            },
            delivery: {
                icon: 'fa-truck',
                name: 'Доставка',
                label: 'бесплатно',
                link: '/delivery'
            },
            stocks: {
                icon: 'fa-tag',
                name: 'Акции',
                label: 'полный список',
                link: '/stocks'
            },
            cart: {
                icon: 'fa-shopping-cart',
                name: 'Корзина',
                label: 'пока что пустая',
                link: '/cart'
            },
            phone: {
                icon: 'fa-phone-square',
                name: '+7(925)477-5001',
                label: '09:00-21:00',
                link: '/contacts'
            },
        };
        this.cartData = { sum: 0, count: 0 };
        navbarService.cartDataSubject.subscribe(function (cartData) {
            _this.cartData = cartData;
        });
    }
    NavbarControl.decorators = [
        { type: Component, args: [{
                    selector: 'market-navbar',
                    host: { 'class': 'navbar' },
                    templateUrl: 'navbar.html'
                },] },
    ];
    NavbarControl.ctorParameters = function () { return [
        { type: NavbarService, },
    ]; };
    return NavbarControl;
}());
export { NavbarControl };
