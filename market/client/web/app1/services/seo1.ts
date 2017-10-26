import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable()
export class SeoService {

    constructor(private metaService: Meta,
                private titleService: Title) {

    }

    setMeta(meta) {
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
