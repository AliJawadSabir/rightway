import { Injectable } from '@angular/core';
import { CategoryModel } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCategoryService {

  private routeURL: String = 'category';

  constructor(protected http: HttpClient) {}

  create(item: CategoryModel) {
    console.log('in category service create '+item);
    return this.http.post(`${this.routeURL}/create`, item);
  }
}
