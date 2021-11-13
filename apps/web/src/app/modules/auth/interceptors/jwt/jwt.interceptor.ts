import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwt: (string | null) = window.localStorage.getItem('jwt');
    if (jwt) {
      return next.handle(request.clone({
        headers: request.headers.set('Authorization', `Bearer ${jwt}`),
      }));
    }
    return next.handle(request);
  }
}
