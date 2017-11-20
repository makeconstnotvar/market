import {Component, Input} from "@angular/core";
import { NavbarItem} from "models/index";
@Component({
    selector: 'navbar-item',
    templateUrl: 'navbar-item.html'
})
export class NavbarItemComponent {
    @Input()
    data: NavbarItem;

}