import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../_models/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  lastUserId = new BehaviorSubject(0); // last user ID state

  constructor(private http: HttpClient) {}

  get singleUser(): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.API_URL}/users/2`);
  }

  get allUsers(): Observable<UserModel[]> {
    const allUsers = this.http.get<UserModel[]>(`${environment.API_URL}/users`);
    // get track of number of users in database and store its state in BehaviorSubject
    allUsers.pipe(first()).subscribe((users) => {
      this.lastUserId.next(users[users.length - 1].id);
    });
    return allUsers;
  }

  addUser(userData: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.API_URL}/users`, userData);
  }

  deleteUser(userData: UserModel) {
    return this.http.delete(`${environment.API_URL}/users/${userData.id}`);
  }
}
