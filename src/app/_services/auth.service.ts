import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { UserModel } from '../_models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = 'https://reqres.in/api';

  private currentUserSubject = new BehaviorSubject<UserModel>(
    JSON.parse(localStorage.getItem('currentUser') as string)
  );

  currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<any>(`${this.API_URL}/login`, { username, password })
      .pipe(
        map((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  register(username: string, password: string) {
    return this.http.post<any>(`${this.API_URL}/register`, {
      username,
      password,
    });
  }

  get currentUserValue() {
    return this.currentUserSubject.getValue();
  }

  logout() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      localStorage.removeItem('currentUser');
    }
  }
}
