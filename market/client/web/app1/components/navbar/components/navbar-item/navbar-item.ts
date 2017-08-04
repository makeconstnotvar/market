import {Component, Input} from "@angular/core";
import { NavbarItem} from "entities/settings";
@Component({
    selector: 'navbar-item',
    templateUrl: 'navbar-item.html'
})
export class NavbarItemComponent {
    @Input()
    data: NavbarItem;

}