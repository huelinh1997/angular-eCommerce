import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { Book } from '../type';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartsComponent implements OnInit {
  constructor(private cartService: CartServiceService) {
    this.cartList = this.cartService.getCarts();
  }
  getCarts() {
    return this.cartService.getCarts();
  }
  cartList: Book[] = [];
  ngOnInit(): void {}
}
