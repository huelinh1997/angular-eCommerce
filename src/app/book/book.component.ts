import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CartServiceService } from '../services/cart-service.service';
import { Book } from '../type';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(
    private cartService: CartServiceService,
    private authService: AuthService,
    private router: Router
  ) {}
  @Input() book: Book = {} as Book;
  isInCart: boolean = false;
  ngOnInit(): void {}

  handleAddToCart() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['login']);
    }
    this.cartService.addToCart(this.book);
    this.isInCart = true;
  }

  handleRemoveFromCart() {
    this.cartService.removeFromCart(this.book);
    this.isInCart = false;
  }
}
