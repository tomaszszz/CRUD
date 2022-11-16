import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError<any, Observable<any>>((err) => {
        // MOCK API ENDPOINT, NOT NECESSARY
        // if ([401, 403].includes(err.status)) {
        //   this.auth.logout();
        //   console.log('401/403, logged out');
        // }
        return throwError(() => {
          return new Error(err.error.error);
        });
      })
    );
  }
}
