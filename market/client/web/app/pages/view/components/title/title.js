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
                templateUrl: 'title.html'
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