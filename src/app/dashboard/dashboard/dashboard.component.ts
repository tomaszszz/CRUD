import { Component } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user$ = this.data.singleUser;

  constructor(private data: DataService) {}
}
