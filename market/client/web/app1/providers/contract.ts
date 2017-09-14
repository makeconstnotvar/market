import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import {CartData, Contract, Position} from "models";


@Injectable()
export class ContractProvider {
    constructor(private http: Http) {

    }

    getById(id): Observable<Contract> {
        return this.http.post('/api/contract/select', {id: id})
            .map((r: Response) => {
                return r.json() as Contract
            })
    }

    placeContract(item): Observable<any> {
        return this.http.post('/api/contract/place', item)
            .map((r: Response) => {
                return r.json() as any
            });
    }

    postPosition(position: Position): Observable<any> {
        return this.http.post('/api/contract/position', position)
            .map((r: Response) => {
                return r.json() as any
            });
    }

    put(item): Observable<CartData> {
        return this.http.post('/api/contract/update', item)
            .map((r: Response) => {
                return r.json() as CartData
            });
    }

    getCartStatus(): Observable<any> {
        return this.http.post('/api/contract/status', {})
            .map((r: Response) => {
                return r.json() as any
            });
    }

    getCart(): Observable<any> {
        return this.http.post('/api/contract/cart', {})
            .map((r: Response) => {
                return r.json() as any
            });
    }
}