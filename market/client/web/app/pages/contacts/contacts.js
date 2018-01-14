import { Component } from "@angular/core";
import { SettingsProvider } from "../../providers";
import { SeoService } from "../../services";
var ContactsPage = (function () {
    function ContactsPage(settingsProvider, seoService) {
        settingsProvider.meta('contacts').subscribe(function (resp) {
            seoService.setMeta(resp);
        });
    }
    ContactsPage.decorators = [
        { type: Component, args: [{
                    selector: 'contacts',
                    templateUrl: 'contacts.html'
                },] },
    ];
    ContactsPage.ctorParameters = function () { return [
        { type: SettingsProvider, },
        { type: SeoService, },
    ]; };
    return ContactsPage;
}());
export { ContactsPage };
