import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Product} from "models/product";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ProductProvider {
    constructor(private http: HttpClient) {

    }


    list(query): Observable<any> {
        return this.http.post('/api/product/list',  query);
    }

    view(id: string): Observable<Product> {
        return this.http.post<Product>('/api/product/view', {id: id});
    }

    special(): Observable<Product[]> {
        return this.http.post<Product[]> ('/api/product/special', {});
    }
}