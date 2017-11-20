import {Component, Input} from "@angular/core";
import {NavbarItem, CartData} from "models/index";

@Component({
    selector: 'navbar-cart',
    templateUrl: 'navbar-cart.html'
})
export class NavbarCartComponent {
    @Input()
    data: NavbarItem = new NavbarItem();

    @Input()
    cartData: CartData = new CartData();

}