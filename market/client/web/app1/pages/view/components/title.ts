import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector: 'v-title',

    host: {'class': 'me-info col-xs-12'},
    template: `
<a (click)="back()" *ngIf="isBack" class="btn btn-red pull-right m-back">
    <i class="fa fa-chevron-left rgap"></i>Назад
</a>
<h1 class="me-name" >{{name}}</h1>
<div [innerHtml]="details"></div>
`
})
export class ComponentViewTitle {

    @Input()
    name: string;

    @Input()
    details: string;

    @Input()
    isBack: boolean;

    @Output()
    onBack = new EventEmitter();

    back() {
        this.onBack.emit()
    }
}