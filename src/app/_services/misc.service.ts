import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiscService {
  constructor() {}
  whichRoute = new BehaviorSubject<string>('loading');
  isUsersRoute = new BehaviorSubject<boolean>(false);
  loadingState = new BehaviorSubject<boolean>(false);
}
