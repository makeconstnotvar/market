import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {ConfigService} from "./config";

@Injectable()
export class SeoService {

    constructor(private metaService: Meta,
                private titleService: Title,
                private router: Router,
                private configService: ConfigService) {

    }

    setMeta(meta) {
        let config = this.configService.config;
        meta.url = `${config.host}${this.router.url}`;
        meta.image = `${config.host}${meta.image}`;
        this.titleService.setTitle(meta.title);
        this.metaService.getTags('data-meta').forEach(tag => this.metaService.removeTagElement(tag));
        let newTags = this.makeTags(meta);
        this.metaService.addTags(newTags);
    }

    private makeTags(meta) {
        let tags = [];
        for (let prop in template) {

            template[prop].forEach(t => {
                if (meta[prop]) {
                    tags.push({
                        'data-meta': '',
                        name: t,
                        content: meta[prop]
                    })
                }
            })
        }
        return tags;
    }
}

let template = {
    url: ['twitter:url', 'og:url'],
    image: ['twitter:image', 'og:image'],
    title: ['twitter:title', 'og:title'],
    description: ['description', 'og:description'],
    keywords:['keywords']
};
