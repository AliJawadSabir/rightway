import { Injectable } from '@angular/core';
import { ProductModel } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  private routeURL: String = 'product';

  constructor(protected http: HttpClient) {}

  create(item: ProductModel) {
    console.log('in product service create '+item);
    return this.http.post(`${this.routeURL}/create`, item);
  }
}
