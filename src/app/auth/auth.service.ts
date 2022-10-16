import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { FormLogin, FormRegister } from '../type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //isAuthenticated: boolean = false;
  isLoading = false;
  userData: any;
  constructor(
    private router: Router,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  get isLoggedIn(): boolean {
    const userFromLocalStorage = localStorage.getItem('user');
    const user = JSON.parse(userFromLocalStorage || '');

    return !!user;
  }

  register(form: FormRegister) {
    const auth = getAuth();
    return this.afAuth
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((userCredential: { user: any }) => {
        // Signed in
        const user = userCredential.user;
        window.alert('Register success!!');
        this.router.navigate(['login']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
        // ..
      })
      .finally(() => (this.isLoading = false));
  }

  login(form: FormLogin) {
    this.isLoading = true;
    const auth = getAuth();
    return this.afAuth
      .signInWithEmailAndPassword(form.email, form.password)
      .then((userCredential) => {
        //this.isAuthenticated = true;
        this.router.navigate(['']);
        // Signed in
        // const user = userCredential.user;
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['']);
          }
        });
      })
      .catch((error) => {
        //this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
      })
      .finally(() => (this.isLoading = false));
  }

  logout() {
    const auth = getAuth();
    this.afAuth
      .signOut()
      .then(() => {
        // Sign-out successful.
        // this.isAuthenticated = false;
        localStorage.removeItem('user');
        this.router.navigate(['login']);
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
