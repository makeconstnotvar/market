import {Component} from "@angular/core";
import {SettingsProvider} from "../../providers";
import {SeoService} from "../../services";


@Component({
    selector:'contacts',
    templateUrl: 'contacts.html'
})
export class ContactsPage {
    constructor(settingsProvider: SettingsProvider,
                seoService: SeoService) {

        settingsProvider.meta('contacts').subscribe(resp => {
            seoService.setMeta(resp)
        });


    }
}