import {Component, Input} from "@angular/core";
import {NavbarItem} from "models/index";
@Component({
    selector: 'navbar-brand',
    templateUrl: 'navbar-brand.html'
})
export class NavbarBrandComponent {
    @Input()
    data: NavbarItem;
}