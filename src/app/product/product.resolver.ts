import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductsService } from './products.service';
import { mergeMap, catchError } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import Product from './Product';

@Injectable()
export class ProductResolve implements Resolve<Product[]> {

  constructor(private ps: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.ps.getProducts().pipe(
      catchError(error => {
        return EMPTY;
      }), mergeMap(data => {
        if (data) {
          console.log(data);
          return of(data);
        } else {
          return EMPTY;
        }
      })
    );
  }
}
