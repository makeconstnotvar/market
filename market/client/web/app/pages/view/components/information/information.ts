import {Component, Input} from "@angular/core";
@Component({
    selector: 'v-information',
    host: {'class': 'me-info col-md-12 col-lg-6'},
    template: `    
<h2>Описание</h2>
<p [innerHTML]="information"></p>
`
})
export class ComponentViewInformation {

    @Input()
    information: string;

}