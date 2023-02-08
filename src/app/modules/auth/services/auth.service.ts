import { Observable } from 'rxjs';
import { LoginResponse } from './../../../core/interfaces/authResponse.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    API_URL: string = environment.API_URL;

    constructor(private _httpClient: HttpClient) {}

    sendCredentials(email: string, password: string): Observable<LoginResponse> {
        const body = {
            email,
            password
        };
        return this._httpClient.post<LoginResponse>(`${this.API_URL}/auth/login`, body);
    }
}
