import { Injectable } from '@angular/core';
import { CategoryModel } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AddCategoryService extends AuthorizationService {

  private routeURL: String = `${environment.apiBaseUrl}category`;

  constructor(protected http: HttpClient, public router:Router) 
  {super(router,http)}

  create(item: CategoryModel) {
    return this.http.post(`${this.routeURL}/create`, item, this.setHeaders());
  }

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
   * Get single record
   */
  find(id: number) {
    return this.http.get(`${this.routeURL}/find/${id}`, this.setHeaders());
  }

  /**
   * Delete record
   */
  delete(id: number) {
    return this.http.delete(`${this.routeURL}/delete/${id}`, this.setHeaders());
  }
}
