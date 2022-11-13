import { CartsService } from './carts.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../type';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartsComponent implements OnInit {
  listCart: Cart[] = [];
  constructor(
    private cartService: CartsService,
    private toast: NgToastService
  ) {}

  cartList: Cart[] = this.cartService.cartList;
  async ngOnInit(): Promise<void> {
    await this.cartService.getCarts();
    this.listCart = this.cartService.cartList;
  }

  handleUpdateCart(index: number, quantity: number): void {
    this.listCart[index].quantity = quantity;
    const cartUpdate = this.listCart[index];
    this.cartService.updateCartItem(cartUpdate);
  }
}
