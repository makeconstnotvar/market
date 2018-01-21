import {Pipe, SecurityContext} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({name: 'safeHtml', pure: false})
export class Safe {
    constructor(private sanitizer:DomSanitizer){}

    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}