import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FormLogin } from 'src/app/type';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  form: FormLogin = {
    email: '',
    password: '',
  };

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl('/');
    }
  }

  submit(): void {
    this.authService.login(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
