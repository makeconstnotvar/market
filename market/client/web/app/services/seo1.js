import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ConfigService } from "./config";
var SeoService = (function () {
    function SeoService(metaService, titleService, router, configService) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.router = router;
        this.configService = configService;
    }
    SeoService.prototype.setMeta = function (meta) {
        var _this = this;
        var config = this.configService.config;
        meta.url = "" + config.host + this.router.url;
        meta.image = "" + config.host + meta.image;
        this.titleService.setTitle(meta.title);
        this.metaService.getTags('data-meta').forEach(function (tag) { return _this.metaService.removeTagElement(tag); });
        var newTags = this.makeTags(meta);
        this.metaService.addTags(newTags);
    };
    SeoService.prototype.makeTags = function (meta) {
        var tags = [];
        var _loop_1 = function (prop) {
            template[prop].forEach(function (t) {
                if (meta[prop]) {
                    tags.push({
                        'data-meta': '',
                        name: t,
                        content: meta[prop]
                    });
                }
            });
        };
        for (var prop in template) {
            _loop_1(prop);
        }
        return tags;
    };
    SeoService.decorators = [
        { type: Injectable },
    ];
    SeoService.ctorParameters = function () { return [
        { type: Meta, },
        { type: Title, },
        { type: Router, },
        { type: ConfigService, },
    ]; };
    return SeoService;
}());
export { SeoService };
var template = {
    url: ['twitter:url', 'og:url'],
    image: ['twitter:image', 'og:image'],
    title: ['twitter:title', 'og:title'],
    description: ['description', 'og:description'],
    keywords: ['keywords']
};
