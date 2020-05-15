import { Injectable } from '@angular/core';
import { OrderModel } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends AuthorizationService {

  private routeURL: String = `${environment.apiBaseUrl}order`;

  constructor(protected http: HttpClient, public route:Router)
   { super(route,http);}


  /**
   * Create record
   */
  // create(item: OrderModel) {
  create(item) {
    // let options = this.setHeaders();
    return this.http.post(`${this.routeURL}/create`, item, this.setHeaders());
  }

  /**
   * Get all records
   */
  findAll() {
    return this.http.get(`${this.routeURL}/findAll`, this.setHeaders());
  }

  /**
   * Get all records
   */
  findAllWithProducts() {
    return this.http.get(`${this.routeURL}/findAllWithProducts`, this.setHeaders());
  }

  /**
   * Update record
   */
  update(id: Number, item) {
    return this.http.put(`${this.routeURL}/update/${id}`, item, this.setHeaders());
  }

  /**
   * Get single record
   */
  find(id: number) {
    return this.http.get(`${this.routeURL}/find/${id}`, this.setHeaders());
  }

  /**
   * Get single record
   */
  findWithProducts(orderId: number) {
    return this.http.get(`${this.routeURL}/findWithProducts/${orderId}`, this.setHeaders());
  }

  /**
   * Delete record
   */
  delete(id: number) {
    return this.http.delete(`${this.routeURL}/delete/${id}`, this.setHeaders());
  }
}
