import { Injectable } from '@angular/core';
import { ColorModel } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private routeURL: String = `${environment.apiBaseUrl}color`;

  constructor(protected http: HttpClient) {}


  /**
   * Create record
   */
  create(item: ColorModel) {
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
   * Get single record
   */
  find(id: number) {
    return this.http.get(`${this.routeURL}/find/${id}`);
  }

  /**
   * Delete record
   */
  delete(id: number) {
    return this.http.delete(`${this.routeURL}/delete/${id}`);
  }
}
