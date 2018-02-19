import {Inject, Injectable, Optional} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {REQUEST, RESPONSE} from "@nguniversal/express-engine/tokens";
import {Request, Response} from "express";

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

    constructor(@Optional() @Inject('serverUrl') protected serverUrl: string,
                @Inject(REQUEST) private request: Request,
                @Inject(RESPONSE) private response: Response) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let serverReq = !this.serverUrl ? req : req.clone({
            url: `${this.serverUrl}${req.url}`
        });
        return next.handle(serverReq)
    }

}