import {Component, Input} from "@angular/core";
import {Category} from "entities/category";
@Component({
    selector: 'market-menu',
    host: {'class': 'menu'},
    templateUrl: 'menu.html'
})
export class MenuComponent {

    @Input()
    categories: Category[]
}