import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {CartData, Contract, Position} from "../models";

@Injectable()
export class ContractProvider {
    constructor(private http: HttpClient) {

    }

    getById(id): Observable<Contract> {
        return this.http.post<Contract>('/api/contract/select', {id: id});
    }

    placeContract(item): Observable<any> {
        return this.http.post('/api/contract/place', item);
    }

    postPosition(position: Position): Observable<any> {
        return this.http.post('/api/contract/position', position);
    }

    put(item): Observable<CartData> {
        return this.http.post<CartData>('/api/contract/update', item);
    }

    getCartStatus(): Observable<any> {
        return this.http.post('/api/contract/status', {});
    }

    getCart(): Observable<any> {
        return this.http.post('/api/contract/cart', {});
    }
}