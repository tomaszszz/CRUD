import { Component, OnInit } from '@angular/core';
import { first, Observable } from 'rxjs';
import { UserModel } from 'src/app/_models/User';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  user$ = this.data.singleUser;
  users$ = this.data.allUsers;

  constructor(private data: DataService) {}
  ngOnInit(): void {}

  deleteUser(user: UserModel) {
    this.data
      .deleteUser(user)
      .pipe(first())
      .subscribe({
        next: () => console.warn('Pending delete'),
        error: (err) => console.error(`Something went wrong: ${err}`),
        complete: () => console.log('User successfully deleted'),
      });
  }
}
