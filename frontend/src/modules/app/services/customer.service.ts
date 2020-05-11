import { Injectable } from '@angular/core';
import { CustomerModel } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private routeURL: String = `${environment.apiBaseUrl}customer`;

  constructor(protected http: HttpClient) {}

  create(item: CustomerModel) {
    return this.http.post(`${this.routeURL}/create`, item);
  }

  findAll() {
    return this.http.get(`${this.routeURL}/findAll`);
  }
}
