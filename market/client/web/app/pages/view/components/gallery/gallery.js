import { Component, Input, Output, EventEmitter } from "@angular/core";
var ComponentViewGallery = (function () {
    function ComponentViewGallery() {
        this.onImageSelect = new EventEmitter();
    }
    ComponentViewGallery.prototype.imageSelect = function (i) {
        this.onImageSelect.emit(this.images[i]);
    };
    ComponentViewGallery.decorators = [
        { type: Component, args: [{
                    selector: 'v-gallery',
                    host: { 'class': 'me-screens col-xs-12' },
                    templateUrl: 'gallery.html'
                },] },
    ];
    ComponentViewGallery.ctorParameters = function () { return []; };
    ComponentViewGallery.propDecorators = {
        "images": [{ type: Input },],
        "productId": [{ type: Input },],
        "onImageSelect": [{ type: Output },],
    };
    return ComponentViewGallery;
}());
export { ComponentViewGallery };
