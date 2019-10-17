import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from './Product';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string = environment.backendUrl + '/api/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    console.log(ProductName, ProductDescription, ProductPrice);
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    return this.http.post(this.url + '/add', obj);
  }

  getProducts(): Observable<Product[]> {
    return this
      .http
      .get<Product[]>(this.url + '/all');
  }

  editProduct(id) {
    return this
      .http
      .get(this.url + '/edit/' + id);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    return this
      .http
      .post(this.url + '/update/' + id, obj);
  }

  deleteProduct(id) {
    return this
      .http
      .delete(this.url + '/delete/' + id);
  }
}
