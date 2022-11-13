import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgToastModule } from 'ng-angular-popup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from './firebase.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CartsModule } from './carts/carts.module';
// import { IconModule } from './icon/icon.module';
import { MaterialModule } from './added-modules/material.module';

@NgModule({
  declarations: [AppComponent, BookDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BooksModule,
    CartsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgToastModule,
  ],
  // providers: [], // [BooksService]: another way to declare service, we can choose one of both
  bootstrap: [AppComponent],
})
export class AppModule {}
