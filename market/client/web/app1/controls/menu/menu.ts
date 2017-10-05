import {Component, Input} from "@angular/core";
import {Category} from "models";
@Component({
    selector: 'market-menu',
       templateUrl: 'menu.html'
})
export class MenuControl {

    @Input()
    categories: Category[]
}