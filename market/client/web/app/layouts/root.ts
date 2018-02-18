import {Component} from "@angular/core";
import {PlatformService, StateService} from "../services";

@Component({
    selector: 'application',
    template: `
        <router-outlet></router-outlet>`
})
export class RootLayout {

    constructor(stateService: StateService,
                platformService: PlatformService) {
        /*stateService.onEndStateChange.subscribe(event => {
            if (platformService.isBrowser) {
                window.scrollTo(0, 0);
            }
        });*/
    }
}