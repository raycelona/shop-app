import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { injectElementRef } from '@angular/core/src/render3';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard /*implements CanActivate*/ {

    // constructor(private auth: AuthService) {}

    // activate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     return this.auth.isAuthenticated();
    // }
}