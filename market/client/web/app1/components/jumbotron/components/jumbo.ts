import {Component, Input} from "@angular/core";
import {Jumbo} from "../entities/jumbo";
@Component({
    selector: 'jumbo',


    templateUrl: 'jumbo.html'
})
export class JumboComponent {

    @Input()
    jumbo: Jumbo;

}