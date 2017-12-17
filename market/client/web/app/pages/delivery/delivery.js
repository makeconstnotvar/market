import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
export class DeliveryPage {
    constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            this._window = window;
        }
    }
    toSdekList() {
        this._window.open('http://www.edostavka.ru/contacts/city-list.html');
    }
}
DeliveryPage.decorators = [
    { type: Component, args: [{
                selector: 'delivery',
                templateUrl: 'delivery.html',
            },] },
];
DeliveryPage.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
//# sourceMappingURL=delivery.js.map