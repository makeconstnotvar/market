import {Component, Inject, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";
import {SettingsProvider} from "../../providers";
import {SeoService} from "../../services";

@Component({
    selector: 'delivery',
    templateUrl: 'delivery.html',

})
export class DeliveryPage {
    _window;

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                settingsProvider: SettingsProvider,
                seoService: SeoService) {

        settingsProvider.meta('delivery').subscribe(resp => {
            seoService.setMeta(resp)
        });

        if (isPlatformBrowser(this.platformId)) {
            this._window = window;
        }
    }

    toSdekList() {
        this._window.open('http://www.edostavka.ru/contacts/city-list.html');
    }

}