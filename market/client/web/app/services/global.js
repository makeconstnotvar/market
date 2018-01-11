import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
var GlobalService = (function () {
    function GlobalService() {
        this.previousStateSubject = new Subject();
        this.existPreviousState = this.previousStateSubject.asObservable();
    }
    GlobalService.prototype.updateState = function (states) {
        if (states && states.length > 1) {
            this.previousState = states[0];
            this.previousStateSubject.next(states[0]);
        }
    };
    GlobalService.decorators = [
        { type: Injectable },
    ];
    GlobalService.ctorParameters = function () { return []; };
    return GlobalService;
}());
export { GlobalService };
