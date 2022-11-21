import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, public auth: AuthService) {}

  form = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  login(): void {
    const formValue = this.form.value;
    if (this.form.valid) {
      this.auth
        .login(this.form.value.login, this.form.value.password)
        .subscribe({
          next: (val) => console.log(val, 'SUCCESS'),
          error: (err) => console.error(err, 'ERROR'),
        });
    }
  }

  ngOnInit(): void {}
}
