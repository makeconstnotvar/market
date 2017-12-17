import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Category} from "models/category";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class CategoryProvider {
    constructor(private http: HttpClient) {

    }

    getTree(): Observable<Category[]> {
        return this.http.post<Category[]>('/api/category/list', {});
    }
}