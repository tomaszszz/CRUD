import { ChangeDetectorRef, Component } from '@angular/core';
import { first } from 'rxjs';
import { UserModel } from 'src/app/_models/User';
import { AuthService } from 'src/app/_services/auth.service';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isEditMode: boolean = false;
  user$ = this.data.getSingleUser(1668777433963);

  constructor(
    private data: DataService,
    private auth: AuthService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

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
    // this.changeDetectorRef.detectChanges();
  }
}
