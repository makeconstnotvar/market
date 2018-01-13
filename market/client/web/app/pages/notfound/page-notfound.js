import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { CategoryProvider } from "providers";
import { ActivatedRoute } from "@angular/router";
import { ConfigService } from "services/config";
import { isPlatformBrowser } from "@angular/common";
export class NotfoundPage {
    constructor(platformId, categoryProvider, activatedRoute, configService) {
        this.platformId = platformId;
        this.categoryProvider = categoryProvider;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.categories = [];
        if (isPlatformBrowser(this.platformId)) {
            this._window = window;
        }
    }
    ngOnInit() {
        this.categoryProvider.getTree().subscribe(response => {
            this.categories = response;
        });
        if (isPlatformBrowser(this.platformId)) {
            this.activatedRoute.params.subscribe((params) => {
                this.url = params['url'];
                this.requestUrl = `${this._window.location.protocol}//${this.configService.config.host}/${this.url}`;
            });
        }
    }
}
NotfoundPage.decorators = [
    { type: Component, args: [{
                templateUrl: 'notfound.html'
            },] },
];
NotfoundPage.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    { type: CategoryProvider, },
    { type: ActivatedRoute, },
    { type: ConfigService, },
];
//# sourceMappingURL=page-notfound.js.map