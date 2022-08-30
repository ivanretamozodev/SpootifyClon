import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
    formLogin: FormGroup = new FormGroup({});
    constructor(private _authService: AuthService) {}

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
    sendLogin() {
        const { email, password } = this.formLogin.value;
        this._authService.sendCredentials(email, password);
    }
}
