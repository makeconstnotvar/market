import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ParameterProvider {
    constructor(private http: HttpClient) {

    }

    getList(catUrl: string) {
        return this.http
            .post('/api/parameters/list', {catUrl: catUrl});
    }

    getActive(query) {
        return this.http
            .post('/api/parameters/active', query);
    }

}