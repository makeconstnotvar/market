import { Component, Input } from "@angular/core";
export class ComponentViewPhoto {
}
ComponentViewPhoto.decorators = [
    { type: Component, args: [{
                selector: 'v-photo',
                host: { 'class': 'me-image' },
                template: `
<img *ngIf="image" class="img-responsive" src="{{'/photos/'+productId+ '/l_'+ image}}">
`
            },] },
];
ComponentViewPhoto.ctorParameters = () => [];
ComponentViewPhoto.propDecorators = {
    "productId": [{ type: Input },],
    "image": [{ type: Input },],
};
//# sourceMappingURL=photo.js.map