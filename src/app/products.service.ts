import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://dwk5c1lsnem8l.cloudfront.net/runtime/5da8831ec420a8000180e345/api/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    console.log(ProductName, ProductDescription, ProductPrice);
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http.post(this.uri + '/add', obj)
        .subscribe(res => {
          console.log('Done');
        });
  }

  getProducts(): Observable<Product[]> {
    return this
           .http
           .get<Product[]>(this.uri + '/all');
  }

  editProduct(id) {
    return this
            .http
            .get(this.uri + '/edit/' + id);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    return this
      .http
      .post(this.uri + '/update/' + id, obj);
  }

  deleteProduct(id) {
    return this
              .http
              .delete(this.uri + '/delete/' + id);
  }
}
