import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private dialogRef: MatDialogRef<AddUserComponent>
  ) {}

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: '',
    avatar: '',
  });

  ngOnInit(): void {}

  addUser() {
    this.data
      .addUser({
        ...this.userForm.value,
        id: Date.now(),
      })
      .subscribe(console.log);
    this.dialogRef.close();
    location.reload();
  }
}
