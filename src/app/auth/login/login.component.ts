import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { MiscService } from 'src/app/_services/misc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  whichRoute = this.misc.whichRoute;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private misc: MiscService
  ) {}

  form = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  login(): void {
    const userCredentials = this.form.value;
    if (this.form.valid) {
      this.auth
        .login(userCredentials.login, userCredentials.password)
        .subscribe({
          next: (val) => {
            this.misc.loadingState.next(true);
            console.log(val, 'LOADING');
          },
          complete: () => {
            console.log('LOGIN SUCCESS');
            setTimeout(() => this.misc.loadingState.next(false), 2000);
          },
        });
    }
  }

  ngOnInit(): void {}
}
