import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class InjectTokenInterceptor implements HttpInterceptor {
    constructor(private _cookieService: CookieService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this._cookieService.get('token');
        if (token) {
            const clone = request.clone({
                setHeaders: { authorization: `Bearer ${token}` }
            });
            return next.handle(clone);
        } else {
            return next.handle(request);
        }
    }
}
