import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {CartData} from "models";

@Injectable()
export class NavbarService{

    private cartDataSubject = new Subject<CartData>();

    public observable = this.cartDataSubject.asObservable();//.subscribe;

    public updateCartData(cartData: CartData) {
        this.cartDataSubject.next(cartData);
    }
}