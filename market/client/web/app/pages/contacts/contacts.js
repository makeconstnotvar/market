import { Component } from "@angular/core";
import { SettingsProvider } from "../../providers";
import { SeoService } from "../../services";
export class ContactsPage {
    constructor(settingsProvider, seoService) {
        settingsProvider.meta('contacts').subscribe(resp => {
            seoService.setMeta(resp);
        });
    }
}
ContactsPage.decorators = [
    { type: Component, args: [{
                selector: 'contacts',
                templateUrl: 'contacts.html'
            },] },
];
ContactsPage.ctorParameters = () => [
    { type: SettingsProvider, },
    { type: SeoService, },
];
//# sourceMappingURL=contacts.js.map