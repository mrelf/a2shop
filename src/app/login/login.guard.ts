import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private _loginService: LoginService, private _router: Router) {}

    canActivate() {
        if(this._loginService.isLoggedIn()) {
            return true
        } else {
            this._router.navigate(['login']);
        }
        return false
    }
}