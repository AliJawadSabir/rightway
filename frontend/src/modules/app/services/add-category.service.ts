import { Injectable } from '@angular/core';
import { CategoryModel } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddCategoryService {

  private routeURL: String = `${environment.apiBaseUrl}category`;

  constructor(protected http: HttpClient) {}

  create(item: CategoryModel) {
    console.log('in category service create '+item);
    return this.http.post(`${this.routeURL}/create`, item);
  }

  findAll() {
    console.log('in category service find all ');
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
