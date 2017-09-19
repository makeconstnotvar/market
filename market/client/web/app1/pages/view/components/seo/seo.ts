import {Component, Input} from "@angular/core";
@Component({
    selector: 'v-seo',
    template: `
<div [innerHtml]="seo"></div>
`
})
export class ComponentViewSeo {

    @Input()
    seo: string;

}