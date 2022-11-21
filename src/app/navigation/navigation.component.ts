import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AddUserComponent } from '../dashboard/add-user/add-user.component';
import { AuthService } from '../_services/auth.service';
import { MiscService } from '../_services/misc.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isUsersRoute = this.misc.isUsersRoute;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public auth: AuthService,
    private misc: MiscService,
    public dialog: MatDialog
  ) {}
  whichRoute = this.misc.whichRoute;

  logout() {
    console.log(this.auth.currentUserValue);
    this.auth.logout();
  }

  addUserDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '600px',
    });
  }

  ngOnInit(): void {}
}
