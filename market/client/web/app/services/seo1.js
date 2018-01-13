import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ConfigService } from "./config";
export class SeoService {
    constructor(metaService, titleService, router, configService) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.router = router;
        this.configService = configService;
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
    makeTags(meta) {
        let tags = [];
        for (let prop in template) {
            template[prop].forEach(t => {
                if (meta[prop]) {
                    tags.push({
                        'data-meta': '',
                        name: t,
                        content: meta[prop]
                    });
                }
            });
        }
        return tags;
    }
}
SeoService.decorators = [
    { type: Injectable },
];
SeoService.ctorParameters = () => [
    { type: Meta, },
    { type: Title, },
    { type: Router, },
    { type: ConfigService, },
];
let template = {
    url: ['twitter:url', 'og:url'],
    image: ['twitter:image', 'og:image'],
    title: ['twitter:title', 'og:title'],
    description: ['description', 'og:description'],
    keywords: ['keywords']
};
//# sourceMappingURL=seo1.js.map