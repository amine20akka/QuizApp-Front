import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.get('Skip-Interceptor') === 'true') {
      return next.handle(request);
    }

    const authToken = localStorage.getItem('accessToken');

    if (authToken) {
      if (!request.headers.has('Authorization')) {
        request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${authToken}`) });
      }
    }
    return next.handle(request);
  }
}
