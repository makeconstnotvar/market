import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import {Category} from "models/category";


@Injectable()
export class CategoryProvider {
    constructor(private http: Http) {

    }

    getTree(): Observable<Category[]> {
        return this.http
            .post('/api/category/list', {})
            .map((r: Response) => {
                return r.json() as Category[]
            });
    }
}