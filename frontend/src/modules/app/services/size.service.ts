import { Injectable } from '@angular/core';
import { SizeModel } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  private routeURL: String = `${environment.apiBaseUrl}size`;

  constructor(protected http: HttpClient) {}

  create(item: SizeModel) {
    return this.http.post(`${this.routeURL}/create`, item);
  }

  findAll() {
    return this.http.get(`${this.routeURL}/findAll`);
  }
}
