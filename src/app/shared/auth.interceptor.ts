import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private auth: AuthService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('Intercepted ', req);
        // let reqClone = req.clone({headers: req.headers.set('', '')});
        let reqClone = req.clone({params: req.params.set('auth', this.auth.getToken())})
        return next.handle(reqClone);
    }
}