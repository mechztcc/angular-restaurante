import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token');
    if(token) {
      request = request.clone({ headers: request.headers.set('authorization', 'Bearer ' + token)});
    }
    console.log('Passei pelo token');
    
    
    return next.handle(request);
  }
}
