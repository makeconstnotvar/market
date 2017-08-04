import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector: 'v-gallery',

    host: {'class': 'me-screens col-xs-12'},
    template: `
<table>
    <tr>
        <td *ngFor="let image of images; let i=index;">
            <a class="me-link" (click)="imageSelect(i)" [ngClass]="{'mm-active':selected==i}">
                <img class="img-responsive" src="{{'/photos/'+productId+ '/m_'+  image}}">
            </a>
        </td>
    </tr>
</table>
`
})
export class ComponentViewGallery {

    selected: number;

    @Input()
    images: string[];

    @Input()
    productId: string;

    @Output()
    onImageSelect = new EventEmitter<string>();

    imageSelect(i) {
        this.onImageSelect.emit(this.images[i]);
    }
}