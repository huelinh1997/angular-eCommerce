import { Component, OnInit } from '@angular/core';
import { FormRegister } from 'src/app/type';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}
  form: FormRegister = {
    email: '',
    password: '',
    passwordConfirm: '',
  };
  isMatchedPassword: boolean = true;
  ngOnInit(): void {}

  submit(): void {
    this.authService.register(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
