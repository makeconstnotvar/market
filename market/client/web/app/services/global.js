import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
export class GlobalService {
    constructor() {
        this.previousStateSubject = new Subject();
        this.existPreviousState = this.previousStateSubject.asObservable();
    }
    updateState(states) {
        if (states && states.length > 1) {
            this.previousState = states[0];
            this.previousStateSubject.next(states[0]);
        }
    }
}
GlobalService.decorators = [
    { type: Injectable },
];
GlobalService.ctorParameters = () => [];
//# sourceMappingURL=global.js.map