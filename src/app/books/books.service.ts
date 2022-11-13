import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../type';
@Injectable()
// {
// providedIn: 'root',
// providedIn: 'root':  mean this book service is available throughout our project,
// we can call this service anywhere inside any component
// Another way: we can declare provide in app.module like this: providers: [BooksService]
//}
export class BooksService {
  constructor(private http: HttpClient) {}

  listProducts: Book[] = [];

  getProductList = () => {
    return this.http.get<any>(
      'https://5e3a81f58d7e1300149cdb84.mockapi.io/list-product'
    );
  };
}
