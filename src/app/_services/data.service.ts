import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../_models/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSingleUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.API_URL}/users/${id}`);
  }

  get allUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.API_URL}/users`);
  }

  addUser(userData: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.API_URL}/users`, userData);
  }

  deleteUser(userData: UserModel): Observable<any> {
    return this.http.delete(`${environment.API_URL}/users/${userData.id}`);
  }

  editUser(userData: UserModel) {}
}
