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
    console.log('login service', item);
    return this.http.post(`${this.routeURL}/login`, item)
      .map(response => {
        // let res = response.json();
        // my change
        let res = response;

        localStorage.setItem('id', res['id']);
        localStorage.setItem('name', res['name']);
        localStorage.setItem('email', res['email']);
        localStorage.setItem('isSuperUser', res['isSuperUser']);
        localStorage.setItem('token', res['token']);

        return res['isSuperUser'];
        // return true;
      })
      //.catch(this.handleError);
  }
}
