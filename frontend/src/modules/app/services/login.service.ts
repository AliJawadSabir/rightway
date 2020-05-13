import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private routeURL: String = `${environment.apiBaseUrl}user`;

  constructor(protected http: HttpClient) {}

  login(item: LoginModel): Observable<boolean> {
    return this.http.post(`${this.routeURL}/login`, item)
      .map(response => {
        // let res = response.json();
        // my change
        let res = response;

        sessionStorage.setItem('id', res['id']);
        sessionStorage.setItem('name', res['name']);
        sessionStorage.setItem('email', res['email']);
        sessionStorage.setItem('value', res['isSuperUser']);
        sessionStorage.setItem('token', res['token']);

        return res['isSuperUser'];
        // return true;
      })
      //.catch(this.handleError);
  }
}
