import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import {Product} from "entities/product";


@Injectable()
export class ProductProvider {
    constructor(private http: Http) {

    }


    list(filter): Observable<any> {
        return this.http.post('/api/product/list', {filter: filter})
            .map((r: Response) => {
                return r.json()
            });
    }

    view(id: string): Observable<Product> {
        return this.http.post('/api/product/view', {id: id})
            .map((r: Response) => {
                return r.json() as Product
            });
    }

    special(): Observable<Product[]> {
        return this.http.post('/api/product/special', {})
            .map((r: Response) => {
                return r.json() as Product[]
            });
    }
}