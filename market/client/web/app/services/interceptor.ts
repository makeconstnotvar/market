import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {Router} from "@angular/router";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private  injector: Injector) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do((event:any) => {
            if (event instanceof HttpResponse && event.body.redirectUrl) {
                let router = this.injector.get(Router);
                router.navigateByUrl(event.body.redirectUrl);
                return Observable.empty();
            }
            if (event instanceof HttpResponse && event.body.notFoundUrl) {
                let router = this.injector.get(Router);
                router.navigateByUrl('/notfound');
                return Observable.empty();
            }
        });
    }
}