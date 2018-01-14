import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser, isPlatformServer} from "@angular/common";

@Injectable()
export class PlatformService {
    public isBrowser: boolean;
    public isServer: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: Object,) {
        this.isBrowser = isPlatformBrowser(this.platformId);
        this.isServer = isPlatformServer(this.platformId);
    }
}