import { Component, Input, Output, EventEmitter } from "@angular/core";
export class ComponentViewGallery {
    constructor() {
        this.onImageSelect = new EventEmitter();
    }
    imageSelect(i) {
        this.onImageSelect.emit(this.images[i]);
    }
}
ComponentViewGallery.decorators = [
    { type: Component, args: [{
                selector: 'v-gallery',
                host: { 'class': 'me-screens col-xs-12' },
                templateUrl: 'gallery.html'
            },] },
];
ComponentViewGallery.ctorParameters = () => [];
ComponentViewGallery.propDecorators = {
    "images": [{ type: Input },],
    "productId": [{ type: Input },],
    "onImageSelect": [{ type: Output },],
};
//# sourceMappingURL=gallery.js.map