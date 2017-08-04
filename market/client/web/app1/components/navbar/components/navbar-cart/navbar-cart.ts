import {Component, Input} from "@angular/core";
import {NavbarItem} from "entities/settings";
import {CartData} from "entities/cart";
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