import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models';
import { Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AuthorizationService {

  private routeURL: String = `${environment.apiBaseUrl}product`;

  // constructor(protected http: HttpClient) { }
  constructor(protected http: HttpClient, public router:Router) 
  {super(router,http)}

  create(item: ProductModel) {
    return this.http.post(`${this.routeURL}/create`, item, this.setHeaders());
  }

  /**
   * Get all records
   */
  findAll() {
    return this.http.get(`${this.routeURL}/findAll`, this.setHeaders());
  }

  /**
   * Update record
   */
  update(id: Number, item) {
    return this.http.put(`${this.routeURL}/update/${id}`, item, this.setHeaders());
  }

  /**
   * Update record
   */
  updateQuantity(id: Number, quantity) {
    let quan = {quantity:quantity}
    return this.http.put(`${this.routeURL}/updateQuantity/${id}`, quan, this.setHeaders());
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
  findByDiscount(discount: number) {
    return this.http.get(`${this.routeURL}/findByDiscount/${discount}`, this.setHeaders());
  }

  /**
   * Get single record
   */
  findBySeason(season: string) {
    return this.http.get(`${this.routeURL}/findBySeason/${season}`, this.setHeaders());
  }

  /**
   * Get single record
   */
  findByType(type: string) {
    return this.http.get(`${this.routeURL}/findByType/${type}`, this.setHeaders());
  }

  /**
   * Get records against code
   */
  findWithCode(id: number) {
    return this.http.get(`${this.routeURL}/findWithCode/${id}`, this.setHeaders());
  }

  /**
   * Delete record
   */
  delete(id: number) {
    return this.http.delete(`${this.routeURL}/delete/${id}`, this.setHeaders());
  }
}
