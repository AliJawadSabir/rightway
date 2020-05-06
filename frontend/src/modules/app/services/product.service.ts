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

  /**
   * Get all records
   */
  findAll() {
    console.log('in product service find all ');
    return this.http.get(`${this.routeURL}/findAll`);
  }

  /**
   * Update record
   */
  update(id: Number, item) {
    return this.http.put(`${this.routeURL}/update/${id}`, item);
  }

  /**
   * Get single record
   */
  find(id: number) {
    return this.http.get(`${this.routeURL}/find/${id}`);
  }

  /**
   * Get single record
   */
  findByDiscount(discount: number) {
    return this.http.get(`${this.routeURL}/findByDiscount/${discount}`);
  }

  /**
   * Get single record
   */
  findByType(type: string) {
    return this.http.get(`${this.routeURL}/findByType/${type}`);
  }

  /**
   * Get records against code
   */
  findWithCode(id: number) {
    return this.http.get(`${this.routeURL}/findWithCode/${id}`);
  }

  /**
   * Delete record
   */
  delete(id: number) {
    return this.http.delete(`${this.routeURL}/delete/${id}`);
  }
}
