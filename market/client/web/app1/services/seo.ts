import {Injectable} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";

@Injectable()
export class SeoService {

    constructor(private metaService: Meta,
                private titleService: Title) {

    }

    setMeta(meta) {
        this.titleService.setTitle(meta.title);
        let tags = this.metaService.getTags('ng-meta');
        tags.forEach(tag=>this.metaService.removeTagElement(tag));
        this.metaService.addTags(meta.tags);
    }
}