import {Component, Inject, PLATFORM_ID} from "@angular/core";
import {Category} from "models/category";
import {CategoryProvider} from "providers";
import {ActivatedRoute, Params} from "@angular/router";
import {ConfigService} from "services/config";
import {isPlatformBrowser} from "@angular/common";

@Component({
    templateUrl: 'notfound.html'
})
export class NotfoundPage {

    url: string;
    requestUrl: string;
    _window: any;
    categories: Category[] = [];

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                private categoryProvider: CategoryProvider,
                private activatedRoute: ActivatedRoute,
                private configService: ConfigService) {
        if (isPlatformBrowser(this.platformId)) {
            this._window = window;
        }
    }

    ngOnInit(): void {
        this.categoryProvider.getTree().subscribe(
            response => {
                this.categories = response
            });
        if (isPlatformBrowser(this.platformId)) {
            this.activatedRoute.params.subscribe((params: Params) => {
                this.url = params['url'];
                this.requestUrl = `${this._window.location.protocol}//${this.configService.config.host}/${this.url}`;
            });
        }
    }
}