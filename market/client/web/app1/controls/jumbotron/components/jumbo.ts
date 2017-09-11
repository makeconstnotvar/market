import {Component, Input} from "@angular/core";
import {Jumbo} from "../models/jumbo";
@Component({
    selector: 'jumbo',


    templateUrl: 'jumbo.html'
})
export class JumboComponent {

    @Input()
    jumbo: Jumbo;

}