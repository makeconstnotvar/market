import {Component, Input} from "@angular/core";
import {NavbarItem} from "entities/settings";
@Component({
    selector: 'navbar-brand',
    templateUrl: 'navbar-brand.html'
})
export class NavbarBrandComponent {
    @Input()
    data: NavbarItem;
}