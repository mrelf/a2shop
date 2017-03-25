import { Component } from '@angular/core';

import {LoginService} from '../login/login.service'

@Component({
    selector: 'shop-admin',
    templateUrl: './shop-admin.component.html',
    styleUrls: ['./shop-admin.component.css']
})

export class ShopAdminComponent {
    constructor(private _loginService: LoginService){}

    adminUser = this._loginService.loggedInUserService();
}