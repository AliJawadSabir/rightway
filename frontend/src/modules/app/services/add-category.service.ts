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
}
