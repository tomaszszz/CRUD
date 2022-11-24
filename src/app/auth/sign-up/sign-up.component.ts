import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { MiscService } from 'src/app/_services/misc.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
    private misc: MiscService
  ) {}

  ngOnInit(): void {}

  register() {
    const userCredentials = this.form.value;
    if (this.form.valid) {
      this.auth
        .register(userCredentials.login, userCredentials.password)
        .pipe()
        .subscribe({
          next: (res) => {
            console.log(res, 'LOADING');
            this.misc.loadingState.next(true);
          },
          error: (err) => console.log(err, 'ERROR' + err),
          complete: () => {
            console.log('VALID RESPONSE, COMPLETED');
            // for demonstration purposes of loading state
            setTimeout(() => this.misc.loadingState.next(false), 2000);
            this.router.navigateByUrl('/auth/login');
          },
        });
    }
  }
}
