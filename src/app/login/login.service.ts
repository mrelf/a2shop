import { Injectable } from '@angular/core';

export class User {
    constructor (
        public email: string,
        public password: string,
        public name: string
    ) {}
}

var users: User[] = [
    new User('cristinap@alaska.ro', 'admin', 'Petean Cristina'),
]

@Injectable()
export class LoginService {
    private loggedIn = false;
    private loggedInUser: string;

    constructor() {
        this.loggedIn = !! window.localStorage.getItem('userAuth')
    }

    login(user) {
        var authenticatedUser = users.find(u => u.email === user.email);
        if(authenticatedUser && authenticatedUser.password === user.password) {
/*            if(ru.rememberUser == true) {
                window.localStorage.setItem('userAuth', JSON.stringify(authenticatedUser));
            }*/
            this.loggedIn = true;
            this.loggedInUser = authenticatedUser.name;
            return true;
        }
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    loggedInUserService() {
        if (this.loggedInUser) {
            return this.loggedInUser;
        } else {
            let loggedInUserName = JSON.parse(window.localStorage.getItem('userAuth'));
            return loggedInUserName.name;
        }
    }
}