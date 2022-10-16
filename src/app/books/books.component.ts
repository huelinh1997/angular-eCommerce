import { Component, OnInit } from '@angular/core';
import { Book } from '../type';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BooksService) {
    //this.listBook = this.bookService.getBooks();
  }
  listBook: Book[] = [];
  ngOnInit(): void {
    this.listBook = this.bookService.getBooks();
  }
}
