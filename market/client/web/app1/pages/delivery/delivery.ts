import {Component, Inject, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";

@Component({
    selector: 'delivery',
    templateUrl: 'delivery.html',

})
export class DeliveryPage {
    _window;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            this._window = window;
        }
    }

    toSdekList() {
        this._window.open('http://www.edostavka.ru/contacts/city-list.html');
    }

}