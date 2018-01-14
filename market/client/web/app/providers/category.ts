import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";
import {Category} from "../models";

@Injectable()
export class CategoryProvider {
    constructor(private http: HttpClient) {

    }

    getTree(): Observable<Category[]> {
        return this.http.post<Category[]>('/api/category/list', {});
    }
}