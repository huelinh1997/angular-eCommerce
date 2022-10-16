import { Injectable } from '@angular/core';
import { Book } from '../type';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor() {}
  cartList: Book[] = [];

  getCarts() {
    return this.cartList;
  }

  addToCart(book: Book) {
    this.cartList.unshift(book);
  }

  removeFromCart(book: Book) {
    this.cartList = this.cartList.filter((item) => item != book);
  }
}
