import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Book } from '../type';
import { BooksService } from './books.service';
import { CartsService } from '../carts/carts.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(
    private bookService: BooksService,
    private cartService: CartsService
  ) {}
  listBook: Book[] = [];
  ngOnInit(): void {
    this.cartService.getCarts();
    this.bookService.getProductList().subscribe((data) => {
      this.listBook = data;
    });
  }
}
