import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {ConfigService} from "./config";
import {MetaInfo} from "../models";
import {Location} from "@angular/common";
import {PlatformService} from "./platform";

@Injectable()
export class SeoService {

    constructor(private metaService: Meta,
                private titleService: Title,
                private router: Router,
                private configService: ConfigService,
                private platformService: PlatformService) {
        if (this.platformService.isBrowser) {
            this._window = window;
        }
    }

    _window: any;

    setMeta(meta) {
        let config = this.configService.config;
        meta.url = Location.joinWithSlash(config.host, this.router.url);
        meta.image = Location.joinWithSlash(config.host, meta.image || config.logo);
        this.metaService.getTags('data-meta').forEach(tag => this.metaService.removeTagElement(tag));
        let metaInfo = this.makeMetaInfo(meta);
        this.titleService.setTitle(metaInfo.title);
        this.metaService.addTags(metaInfo.tags);


    }

    reachGoal(event) {
        if (this.platformService.isBrowser) {
            this._window.yaCounter31040946.reachGoal(event)
        }
    }

    private makeMetaInfo(meta: MetaInfo) {
        let newMeta = {
            "title": meta.title,
            "tags": [
                {"name": "description", "content": meta.description},

                {"name": "image", "content": meta.image},

                {"itemprop": "name", "content": meta.title},
                {"itemprop": "description", "content": meta.description},
                {"itemprop": "image", "content": meta.image},

                {"name": "twitter:title", "content": meta.title},
                {"name": "twitter:description", "content": meta.description},
                {"name": "twitter:url", "content": meta.url},
                {"name": "twitter:image", "content": meta.image},

                {"name": "og:title", "content": meta.title},
                {"name": "og:description", "content": meta.description},
                {"name": "og:url", "content": meta.url},
                {"name": "og:image", "content": meta.image},
            ]
        };
        newMeta.tags.forEach(tag => {
            tag['data-meta'] = '';
        });
        return newMeta;
    }
}
