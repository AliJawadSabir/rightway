import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../../environments/environment";
import {NotifyUserModel} from '../models';
import {RegisterModel} from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

<<<<<<< HEAD
  private routeURL: String = `http://localhost:3000/user`;
  private route: String = `${environment.apiBaseUrl}notifyuser`;
=======
  private routeURL: String = `${environment.apiBaseUrl}notifyuser`;
>>>>>>> 82e25e6d1c1903a5db65e9904feddeb15d2bf47f

  constructor(protected http: HttpClient) {}

  create(item: NotifyUserModel) {
    console.log('in register service create '+item);
    return this.http.post(`${this.route}/create`, item);
  }

  register(item: RegisterModel) {
    console.log('in register service register '+item.email);
    return this.http.post(`${this.routeURL}/register`, item);
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
