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
    return this.http.post(`${this.routeURL}/create`, item);
  }

  /**
   * Get all records
   */
  findAll() {
    return this.http.get(`${this.routeURL}/findAll`);
  }

  /**
   * Update record
   */
  update(id: Number, item) {
    return this.http.put(`${this.routeURL}/update/${id}`, item);
  }

  /**
   * Update record
   */
  updateQuantity(id: Number, quantity) {
    let quan = {quantity:quantity}
    return this.http.put(`${this.routeURL}/updateQuantity/${id}`, quan);
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
  findBySeason(season: string) {
    return this.http.get(`${this.routeURL}/findBySeason/${season}`);
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
