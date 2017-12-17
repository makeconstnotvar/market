import {Component, Input} from "@angular/core";
@Component({
    selector: 'v-photo',

    host:{'class':'me-image'},
    template: `
<img *ngIf="image" class="img-responsive" src="{{'/photos/'+productId+ '/l_'+ image}}">
`
})
export class ComponentViewPhoto {

    @Input()
    productId: string;

    @Input()
    image: string;
}