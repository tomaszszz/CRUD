import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { MiscService } from './_services/misc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CRUD';

  constructor(private router: Router, private misc: MiscService) {}

  ngOnInit(): void {
    // check on which route we are right now and set its state in the MiscService
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.misc.whichRoute.next(event.url);
        //check if we're on UsersComponent
        if (event.url === '/dashboard/users') {
          this.misc.isUsersRoute.next(true);
        } else this.misc.isUsersRoute.next(false);
      });
  }
}
