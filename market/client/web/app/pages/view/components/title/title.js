import { Component, EventEmitter, Input, Output } from "@angular/core";
var ComponentViewTitle = (function () {
    function ComponentViewTitle() {
        this.onBack = new EventEmitter();
    }
    ComponentViewTitle.prototype.back = function () {
        this.onBack.emit();
    };
    ComponentViewTitle.decorators = [
        { type: Component, args: [{
                    selector: 'v-title',
                    host: { 'class': 'me-info col-xs-12' },
                    templateUrl: 'title.html'
                },] },
    ];
    ComponentViewTitle.ctorParameters = function () { return []; };
    ComponentViewTitle.propDecorators = {
        "name": [{ type: Input },],
        "details": [{ type: Input },],
        "isBack": [{ type: Input },],
        "onBack": [{ type: Output },],
    };
    return ComponentViewTitle;
}());
export { ComponentViewTitle };
