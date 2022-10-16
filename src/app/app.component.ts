import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './firebase.config';
import { getFirestore } from 'firebase/firestore';

@Component({
  // we add a decorator called Component, this component decorator add metadata
  // to tell to the angular what is the role of this app component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-practice-eCommerce';
  db: any;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    const app = initializeApp(firebaseConfig);
    // Initialize Cloud Firestore and get a reference to the service
    this.db = getFirestore(app);
  }

  isAuthenticated() {
    return this.authService.isLoggedIn;
  }

  logout() {
    return this.authService.logout();
  }
}
