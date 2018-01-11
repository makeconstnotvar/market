import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { SettingsProvider } from "../../providers";
import { SeoService } from "../../services";
var DeliveryPage = (function () {
    function DeliveryPage(platformId, settingsProvider, seoService) {
        this.platformId = platformId;
        settingsProvider.meta('delivery').subscribe(function (resp) {
            seoService.setMeta(resp);
        });
        if (isPlatformBrowser(this.platformId)) {
            this._window = window;
        }
    }
    DeliveryPage.prototype.toSdekList = function () {
        this._window.open('http://www.edostavka.ru/contacts/city-list.html');
    };
    DeliveryPage.decorators = [
        { type: Component, args: [{
                    selector: 'delivery',
                    templateUrl: 'delivery.html',
                },] },
    ];
    DeliveryPage.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
        { type: SettingsProvider, },
        { type: SeoService, },
    ]; };
    return DeliveryPage;
}());
export { DeliveryPage };
