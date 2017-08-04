import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {NavigationEnd} from "@angular/router";
@Injectable()
export class GlobalService {
    private previousStateSubject = new Subject<Object>();

    public previousState:NavigationEnd;

    public existPreviousState = this.previousStateSubject.asObservable();//.subscribe;

    public updateState(states) {
        if (states && states.length > 1){
            this.previousState = states[0];
            this.previousStateSubject.next(states[0]);
        }
    }
}