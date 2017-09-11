import {Component, Input} from "@angular/core";
import { NavbarItem} from "models";
@Component({
    selector: 'navbar-item',
    templateUrl: 'navbar-item.html'
})
export class NavbarItemComponent {
    @Input()
    data: NavbarItem;

}