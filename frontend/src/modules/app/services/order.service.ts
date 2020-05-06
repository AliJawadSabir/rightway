import { Injectable } from '@angular/core';
import { OrderModel } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private routeURL: String = `${environment.apiBaseUrl}order`;

  constructor(protected http: HttpClient) {}


  /**
   * Create record
   */
  // create(item: OrderModel) {
  create(item) {
    console.log('in order service create '+item);
    return this.http.post(`${this.routeURL}/create`, item);
  }

  /**
   * Get all records
   */
  findAll() {
    console.log('in order service find all ');
    return this.http.get(`${this.routeURL}/findAll`);
  }

  /**
   * Get all records
   */
  findAllWithProducts() {
    console.log('in order service find all ');
    return this.http.get(`${this.routeURL}/findAllWithProducts`);
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
  findWithProducts(orderId: number) {
    return this.http.get(`${this.routeURL}/findWithProducts/${orderId}`);
  }

  /**
   * Delete record
   */
  delete(id: number) {
    return this.http.delete(`${this.routeURL}/delete/${id}`);
  }
}
