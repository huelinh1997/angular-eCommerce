import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { AuthService } from '../auth/auth.service';
import { CartsService } from '../carts/carts.service';
import { Book, Cart } from '../type';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(
    private cartService: CartsService,
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService
  ) {}
  @Input() book: Book = {} as Book;
  quantity: number = 1;
  ngOnInit(): void {}

  handleAddToCart() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['login']);
      return;
    }

    const cart: Cart = {
      productId: this.book.id,
      title: this.book.title,
      author: this.book.author,
      image: this.book.image,
      price: this.book.price,
      quantity: this.quantity,
      type: this.book.type,
      unit: this.book.unit,
    };
    this.cartService.addToCart(cart);
  }

  handleRemoveFromCart() {
    // this.cartService.removeFromCart(this.book);
  }
}
