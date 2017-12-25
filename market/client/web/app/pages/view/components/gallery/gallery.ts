import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector: 'v-gallery',

    host: {'class': 'me-screens col-xs-12'},
    templateUrl: 'gallery.html'
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