import {RESPONSE} from '@nguniversal/express-engine/tokens'
import {Inject, Injectable, Optional} from '@angular/core'
import {Response} from 'express'
import {Router} from "@angular/router";

@Injectable()
export class ServerResponseService {

    private response: Response;

     constructor(@Optional() @Inject(RESPONSE) response: any,private router:Router) {
        this.response = response
    }

    setStatus(code: number, message?: string) {
        if (this.response) {
            this.response.statusCode = code;
            if (message)
                this.response.statusMessage = message
        }

    }

    setNotFound(message = 'not found') {
        if (this.response) {
            this.response.statusCode = 404;
            this.response.statusMessage = message;
        }

    }

    setUnauthorized(message = 'Unauthorized') {
        if (this.response) {
            this.response.statusCode = 401;
            this.response.statusMessage = message
        }

    }

    setError(message = 'internal server error') {
        if (this.response) {
            this.response.statusCode = 500;
            this.response.statusMessage = message
        }

    }

    setRedirect(url?: string) {
        if (this.response) {
            this.response.statusCode = 301;
            this.response.location(url);
        }

    }
}