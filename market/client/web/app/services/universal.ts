import {Inject, Injectable, Injector, Optional} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {REQUEST, RESPONSE} from "@nguniversal/express-engine/tokens";
import {Request, Response} from "express";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

    constructor(@Optional() @Inject('serverUrl') protected serverUrl: string,
                @Inject(REQUEST) private request: Request,
                @Inject(RESPONSE) private response: Response) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const serverReq = !this.serverUrl ? req : req.clone({
            url: `${this.serverUrl}${req.url}`,
        });
        return next.handle(serverReq)/*.do((event: any) => {
            if (event instanceof HttpResponse && event.body.redirectUrl) {
                this.response.redirect(301, `${this.serverUrl}/${event.body.redirectUrl}`);
                return Observable.empty();
            }
            if (event instanceof HttpResponse && event.body.notFoundUrl) {
                this.response.redirect(404,`${this.serverUrl}/notfound`);
                return Observable.empty();
            }
        })*/
    }

}