import { Component, EventEmitter, Output } from "@angular/core";
var ComponentFilterButtons = (function () {
    function ComponentFilterButtons() {
        this.onApplyFilter = new EventEmitter();
        this.onClearFilter = new EventEmitter();
    }
    ComponentFilterButtons.prototype.applyFilter = function () {
        this.onApplyFilter.emit();
    };
    ComponentFilterButtons.prototype.clearFilter = function () {
        this.onClearFilter.emit();
    };
    ComponentFilterButtons.decorators = [
        { type: Component, args: [{
                    selector: 'filter-buttons',
                    host: { 'class': 'd-flex' },
                    templateUrl: 'buttons.html'
                },] },
    ];
    ComponentFilterButtons.ctorParameters = function () { return []; };
    ComponentFilterButtons.propDecorators = {
        "onApplyFilter": [{ type: Output },],
        "onClearFilter": [{ type: Output },],
    };
    return ComponentFilterButtons;
}());
export { ComponentFilterButtons };
