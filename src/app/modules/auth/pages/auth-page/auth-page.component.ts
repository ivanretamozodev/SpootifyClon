import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
    formLogin: FormGroup = new FormGroup({});
    errorSession: boolean = false;
    constructor(
        private _authService: AuthService,
        private _cookieService: CookieService,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.formLogin = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(7),
                Validators.maxLength(15)
            ])
        });
    }
    sendLogin(): void {
        const { email, password } = this.formLogin.value;
        this._authService.sendCredentials(email, password).subscribe(
            (responseOk) => {
                const { tokenSession } = responseOk;
                this._cookieService.set('token', tokenSession, 4, '/'); //TODO:📌📌📌📌
                this._router.navigate(['/', 'tracks']);
            },
            (err) => {
                this.errorSession = true;
            }
        );
    }
}
