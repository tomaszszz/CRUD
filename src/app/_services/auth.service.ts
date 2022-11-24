import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../_models/Login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<LoginModel | undefined>(
    JSON.parse(localStorage.getItem('currentUser') as string)
  );

  currentUser = this.currentUserSubject.asObservable();
  hasFailed = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<any>(`${environment.API_URL}/auth/login`, { email, password })
      .pipe(
        map((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  register(email: string, password: string) {
    return this.http
      .post<any>(`${environment.API_URL}/auth/register`, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  get currentUserValue() {
    return this.currentUserSubject.getValue();
  }

  logout() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(undefined);
    }
    location.reload();
  }
}
