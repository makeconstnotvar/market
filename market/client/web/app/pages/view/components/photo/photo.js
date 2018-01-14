import { Component, Input } from "@angular/core";
var ComponentViewPhoto = (function () {
    function ComponentViewPhoto() {
    }
    ComponentViewPhoto.decorators = [
        { type: Component, args: [{
                    selector: 'v-photo',
                    templateUrl: 'photo.html'
                },] },
    ];
    ComponentViewPhoto.ctorParameters = function () { return []; };
    ComponentViewPhoto.propDecorators = {
        "productId": [{ type: Input },],
        "image": [{ type: Input },],
    };
    return ComponentViewPhoto;
}());
export { ComponentViewPhoto };
