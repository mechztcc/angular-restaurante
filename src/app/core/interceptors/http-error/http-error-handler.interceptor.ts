import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private notifierService: NotifierService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
      }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if(error.status == 401) {
          this.notifierService.notify('error', 'Email e/ou Senha Incorretos');
        } if(error.status == 400) {
          // this.toastrService.warning(`${error.error.message}`, 'Falha na operação');
        } else {
          this.notifierService.notify('error', 'Error desconhecido');
        }
        return throwError(error);
      })
    )
  }
}
