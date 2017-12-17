import { Component, EventEmitter, Input, Output } from "@angular/core";
export class ComponentViewTitle {
    constructor() {
        this.onBack = new EventEmitter();
    }
    back() {
        this.onBack.emit();
    }
}
ComponentViewTitle.decorators = [
    { type: Component, args: [{
                selector: 'v-title',
                host: { 'class': 'me-info col-xs-12' },
                template: `
        <a (click)="back()" *ngIf="isBack" class="btn btn-red pull-right m-back">
            <i class="fa fa-chevron-left rgap"></i>Назад
        </a>
        <h1 class="me-name" >{{name}}</h1>
        <div [innerHtml]="details"></div>
`
            },] },
];
ComponentViewTitle.ctorParameters = () => [];
ComponentViewTitle.propDecorators = {
    "name": [{ type: Input },],
    "details": [{ type: Input },],
    "isBack": [{ type: Input },],
    "onBack": [{ type: Output },],
};
//# sourceMappingURL=title.js.map