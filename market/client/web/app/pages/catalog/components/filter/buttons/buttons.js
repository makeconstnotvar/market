import { Component, EventEmitter, Output } from "@angular/core";
export class ComponentFilterButtons {
    constructor() {
        this.onApplyFilter = new EventEmitter();
        this.onClearFilter = new EventEmitter();
    }
    applyFilter() {
        this.onApplyFilter.emit();
    }
    clearFilter() {
        this.onClearFilter.emit();
    }
}
ComponentFilterButtons.decorators = [
    { type: Component, args: [{
                selector: 'filter-buttons',
                host: { 'class': 'd-flex' },
                templateUrl: 'buttons.html'
            },] },
];
ComponentFilterButtons.ctorParameters = () => [];
ComponentFilterButtons.propDecorators = {
    "onApplyFilter": [{ type: Output },],
    "onClearFilter": [{ type: Output },],
};
//# sourceMappingURL=buttons.js.map