import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../type';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private http: HttpClient, private toast: NgToastService) {}
  cartList: Cart[] = [];
  cartQuantity: number = 0;

  getCartQuantity(): number {
    let result = 0;
    this.cartList.forEach((item) => {
      result += item.quantity;
    });
    return result;
  }

  getCarts() {
    return this.http
      .get<any>('https://5e3a81f58d7e1300149cdb84.mockapi.io/carts')
      .toPromise()
      .then((data) => {
        this.cartList = data;
        this.cartQuantity = this.getCartQuantity();
      });
  }

  addToCart(cartAdd: Cart) {
    const productIdInCart = this.cartList.map((item) => item.productId);
    if (productIdInCart.includes(cartAdd.productId)) {
      const cartExist = this.cartList.find(
        (cart) => cart.productId === cartAdd.productId
      );
      if (cartExist) {
        cartExist.quantity = cartExist.quantity + cartAdd.quantity;
        this.cartQuantity = this.cartQuantity + cartAdd.quantity;
        return this.updateCartItem(cartExist);
      }
    }
    this.cartList.push(cartAdd);
    this.cartQuantity = this.getCartQuantity();
    return this.http
      .post<any>('https://5e3a81f58d7e1300149cdb84.mockapi.io/carts', cartAdd)
      .toPromise()
      .then(() => {
        this.toast.success({
          detail: 'Success message',
          summary: 'Add to cart success!',
          duration: 3000,
        });
      })
      .catch(() => {
        this.toast.error({
          detail: 'Error message',
          summary: 'Add to cart failed, try again later!',
          duration: 3000,
        });
      });
  }

  updateCartItem(cart: Cart) {
    const cartUpdateIndex = this.cartList.findIndex(
      (item) => item.productId === cart.productId
    );
    this.cartList[cartUpdateIndex] = cart;
    return this.http
      .put<any>(
        `https://5e3a81f58d7e1300149cdb84.mockapi.io/carts/${cart.id}`,
        cart
      )
      .toPromise()
      .then(() => {
        this.cartQuantity = this.getCartQuantity();
        this.toast.success({
          detail: 'Success message',
          summary: 'Update cart success!',
          duration: 3000,
        });
      })
      .catch(() => {
        this.toast.error({
          detail: 'Error message',
          summary: 'Update cart failed, try again later!',
          duration: 3000,
        });
      });
  }

  removeFromCart(book: Cart) {
    // this.cartList = this.cartList.filter((item) => item != book);
  }
}
