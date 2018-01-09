import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {Router} from "@angular/router";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private  injector: Injector) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do(event => {
        }, err => {
            if (err instanceof HttpErrorResponse && err.status == 301) {
                let url = err.error.redirectUrl;
                let router = this.injector.get(Router);
                router.navigateByUrl(url);
                return Observable.empty();
            }
        });
    }
}