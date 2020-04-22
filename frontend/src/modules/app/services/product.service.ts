import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private routeURL: String = `${environment.apiBaseUrl}product`;

  constructor(protected http: HttpClient) { }

  create(item: ProductModel) {
    console.log('in product service create '+item);
    return this.http.post(`${this.routeURL}/create`, item);
  }
}
