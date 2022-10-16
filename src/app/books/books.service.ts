import { Injectable } from '@angular/core';

@Injectable()
// {
// providedIn: 'root',
// providedIn: 'root':  mean this book service is available throughout our project,
// we can call this service anywhere inside any component
// Another way: we can declare provide in app.module like this: providers: [BooksService]
//}
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        title: 'Python Programming for Beginners',
        description:
          'The #1 Python Programming Crash Course for Beginners to Learn Python Coding Well & Fast (with Hands-On Exercises)',
        author: 'Codeone Publishing',
        image:
          'https://m.media-amazon.com/images/I/51xpTnh6DUL._SX258_BO1,204,203,200_.jpg',
        price: 19.24,
      },
      {
        title: 'Learn Coding Basics in Hours with JavaScript',
        description:
          'The #1 Python Programming Crash Course for Beginners to Learn Python Coding Well & Fast (with Hands-On Exercises)',
        author: 'The Tech Academy',
        image:
          'https://m.media-amazon.com/images/I/41I0Fi6rHZL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        price: 3.99,
      },
      {
        title: "Beginner's Step-by-Step Coding Course",
        description: 'Learn Computer Programming the Easy Way',
        author: 'DK',
        image:
          'https://m.media-amazon.com/images/I/512tMqMVn0L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        price: 20.99,
      },
      {
        title: 'Cracking the Coding Interview',
        description: '189 Programming Questions and Solutions',
        author: 'Gayle Laakmann McDowell',
        image:
          'https://m.media-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg',
        price: 35.95,
      },
      {
        title: 'Cracking the Coding Interview',
        description: '189 Programming Questions and Solutions',
        author: 'Gayle Laakmann McDowell',
        image:
          'https://m.media-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg',
        price: 35.95,
      },
    ];
  }
}
