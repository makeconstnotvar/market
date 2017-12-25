import { Component, Input } from "@angular/core";
export class ComponentViewPhoto {
}
ComponentViewPhoto.decorators = [
    { type: Component, args: [{
                selector: 'v-photo',
                templateUrl: 'photo.html'
            },] },
];
ComponentViewPhoto.ctorParameters = () => [];
ComponentViewPhoto.propDecorators = {
    "productId": [{ type: Input },],
    "image": [{ type: Input },],
};
//# sourceMappingURL=photo.js.map