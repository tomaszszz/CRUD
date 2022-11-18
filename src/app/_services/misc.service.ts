import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiscService {
  constructor() {}
  whichRoute = new BehaviorSubject<string>('/');
  isUsersRoute = new BehaviorSubject<boolean>(false);
}
