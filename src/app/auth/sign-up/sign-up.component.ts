import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';

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
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    if (this.form.valid) {
      this.auth
        .register(this.form.value.login, this.form.value.password)
        .pipe()
        .subscribe({
          next: (res) => console.log(res, 'VALID RESPONSE'),
          error: (err) => console.log(err, 'ERROR'),
          complete: () => {
            console.log('COMPLETED');
            this.router.navigateByUrl('/auth/login');
          },
        });
    }
  }
}
