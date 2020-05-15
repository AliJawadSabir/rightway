import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {NotifyUserModel} from '../models';
import {RegisterModel} from '../models';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends AuthorizationService {

  private routeURL: String = `${environment.apiBaseUrl}user`;
  private route: String = `${environment.apiBaseUrl}notifyuser`;
  // constructor(protected http: HttpClient) {}
  constructor(protected http: HttpClient, public router:Router) 
  {super(router,http)}

  create(item: NotifyUserModel) {
    return this.http.post(`${this.route}/create`, item, this.setHeaders());
  }

  register(item: RegisterModel) {
    return this.http.post(`${this.routeURL}/register`, item, this.setHeaders());
  }

  // getAll(): Observable<NotifyUserModel> {
    
  //   return this.__get(`${this._url}/index`)
  //   .map(data => { return <InstituteModel>data.json(); }).catch(this.handleError);

  // }
  // update(id: Number, item) {
  //   return this.__put(`${this._url}/update/${id}`, item).map(data => {
  //     return data.json();
  //   });
  // }
}
