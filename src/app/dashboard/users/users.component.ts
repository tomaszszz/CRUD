import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { UserModel } from 'src/app/_models/User';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$ = this.data.allUsers;
  isEditMode: boolean = false;
  currentPage = 0;
  // pagesChoice = [5, 10, 15, 20];

  constructor(private data: DataService) {}

  ngOnInit(): void {}

  deleteUser(user: UserModel) {
    this.data
      .deleteUser(user)
      .pipe(first())
      .subscribe({
        next: () => console.warn('Pending delete'),
        error: (err) => console.error(`Something went wrong: ${err}`),
        complete: () => {
          location.reload();
        },
      });
  }

  nextPage(): void {
    this.currentPage++;
  }

  prevPage(): void {
    this.currentPage--;
  }

  navigateToPage(page: number) {
    this.currentPage = page;
  }
}
