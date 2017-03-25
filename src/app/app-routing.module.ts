import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginGuard } from './login/login.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'login', component: LoginComponent}
        ])
    ],
    exports: [
        RouterModule
    ] 
})

export class AppRoutingModule {

}