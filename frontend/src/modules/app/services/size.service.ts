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
    console.log('in size service create '+item);
    return this.http.post(`${this.routeURL}/create`, item);
  }

  findAll() {
    console.log('in size service find all ');
    return this.http.get(`${this.routeURL}/findAll`);
  }
}
