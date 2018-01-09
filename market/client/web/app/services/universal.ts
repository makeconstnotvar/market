import {Inject, Injectable, Optional} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {REQUEST} from "@nguniversal/express-engine/tokens";
import {Request} from "express";

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

    constructor(@Optional() @Inject('serverUrl') protected serverUrl: string,
                @Inject(REQUEST) private request: Request) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const serverReq = !this.serverUrl ? req : req.clone({
            url: `${this.serverUrl}${req.url}`,
        });
        serverReq.headers['uid']= this.request['uid'];
        serverReq.headers['test']= 111;

        return next.handle(serverReq)
        /*.do(event => {
                }, err => {
                    if (err instanceof HttpErrorResponse) {
                        console.log('###');
                        return Observable.empty();
                    }
                });*/

    }

}