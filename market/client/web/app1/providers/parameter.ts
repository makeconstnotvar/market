import {Injectable} from "@angular/core";
import {Http} from "@angular/http";


@Injectable()
export class ParameterProvider {
    constructor(private http: Http) {

    }

    getList(catUrl: string) {
        return this.http
            .post('/api/parameters/list', {catUrl: catUrl})
            .map(r => r.json());
    }

    getActive(query) {
        return this.http
            .post('/api/parameters/active', query)
            .map(r => r.json());

    }

}