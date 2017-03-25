import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { LoginService, User } from './login.service';
declare var $:any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    
})

export class LoginComponent {
    loginForm: any;
    public errorMsg = '';

    constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            user: this.formBuilder.group({
                email: ['', Validators.required],
                password: ['', Validators.required]
            }),
/*            rememberMe: this.formBuilder.group({
                rememberUser: []
            })*/
        })
    }

    login() {
        let userDetails = this.loginForm.value.user;
        //let rememberUser = this.loginForm.value.rememberMe;
        if(!this.loginService.login(userDetails)) {
            this.errorMsg = 'Access denied!'
            $.notify(this.errorMsg, 
                { 
                    position:"bottom center",
                    style: 'bootstrap',
                    className: 'error' 
                }
            );
        } else {
            this.router.navigate(['']);
        }
    }
}