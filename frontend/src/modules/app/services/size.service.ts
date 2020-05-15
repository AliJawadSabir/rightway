import { Injectable } from '@angular/core';
import { SizeModel } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class SizeService extends AuthorizationService {

  private routeURL: String = `${environment.apiBaseUrl}size`;

  // constructor(protected http: HttpClient) {}
  constructor(protected http: HttpClient, public router:Router) 
  {super(router,http)}

  create(item: SizeModel) {
    return this.http.post(`${this.routeURL}/create`, item, this.setHeaders());
  }

  findAll() {
    return this.http.get(`${this.routeURL}/findAll`, this.setHeaders());
  }
}
