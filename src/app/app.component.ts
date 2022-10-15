import { Component } from '@angular/core';

@Component({
  // we add a decorator called Component, this component decorator add metadata
  // to tell to the angular what is the role of this app component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-practice-ecommerce';
}
