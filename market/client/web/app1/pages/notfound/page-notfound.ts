import {Component, Inject, OnInit} from "@angular/core";
import {Category} from "models/category";
import {CategoryProvider} from "providers";
import {ActivatedRoute, Params} from "@angular/router";
import {ConfigService} from "services/config";


@Component({
    templateUrl: 'notfound.html'
})
export class NotfoundPage implements OnInit {

    url: string;
    requestUrl: string;
    window;
    categories: Category[] = [];

    constructor(private categoryProvider: CategoryProvider,
                private activatedRoute: ActivatedRoute,
                private configService: ConfigService,
                @Inject('Window') window) {
        this.window = window;
    }

    ngOnInit(): void {
        this.categoryProvider.getTree().subscribe(
            response => {
                this.categories = response
            });
        this.activatedRoute.params.subscribe((params: Params) => {
            this.url = params['url'];
            this.requestUrl = `${this.window.location.protocol}//${this.configService.config.host}/${this.url}`;
        });
    }
}