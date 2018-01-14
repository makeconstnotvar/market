import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class StateService {

    private states: Map<string, any> = new Map();

    onStartStateChange = new EventEmitter();

    onEndStateChange = new EventEmitter();

    getStartState() {
        return this.states.get('NavigationStart')
    }

    getEndState() {
        return this.states.get('NavigationEnd')
    }

    save(key, val) {
        this.states.set(key, val);
        if (key == 'NavigationStart') this.onStartStateChange.emit(val);
        if (key == 'NavigationEnd') this.onEndStateChange.emit(val);
    }


}