import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(private fb: FormBuilder, private data: DataService) {}

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: '',
    avatar: '',
  });

  ngOnInit(): void {}

  addUser() {
    console.log(this.data.lastUserId.getValue() + 1);
    this.data
      .addUser({
        ...this.userForm.value,
        id: this.data.lastUserId.getValue() + 1,
      })
      .subscribe(console.log);
  }
}
