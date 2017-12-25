import {Component, Input} from "@angular/core";
@Component({
    selector: 'v-photo',
    templateUrl: 'photo.html'
})
export class ComponentViewPhoto {

    @Input()
    productId: string;

    @Input()
    image: string;
}