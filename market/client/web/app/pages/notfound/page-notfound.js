import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { CategoryProvider } from "providers";
import { ActivatedRoute } from "@angular/router";
import { ConfigService } from "services/config";
import { isPlatformBrowser } from "@angular/common";
var NotfoundPage = (function () {
    function NotfoundPage(platformId, categoryProvider, activatedRoute, configService) {
        this.platformId = platformId;
        this.categoryProvider = categoryProvider;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.categories = [];
        if (isPlatformBrowser(this.platformId)) {
            this._window = window;
        }
    }
    NotfoundPage.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryProvider.getTree().subscribe(function (response) {
            _this.categories = response;
        });
        if (isPlatformBrowser(this.platformId)) {
            this.activatedRoute.params.subscribe(function (params) {
                _this.url = params['url'];
                _this.requestUrl = _this._window.location.protocol + "//" + _this.configService.config.host + "/" + _this.url;
            });
        }
    };
    NotfoundPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'notfound.html'
                },] },
    ];
    NotfoundPage.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
        { type: CategoryProvider, },
        { type: ActivatedRoute, },
        { type: ConfigService, },
    ]; };
    return NotfoundPage;
}());
export { NotfoundPage };
