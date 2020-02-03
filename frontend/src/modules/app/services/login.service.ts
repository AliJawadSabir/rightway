import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private routeURL: String = 'user';

  constructor(protected http: HttpClient) {}

  login(item: LoginModel): Observable<boolean> {
    return this.http.post(`${this.routeURL}/login`, item)
      .map(response => {
        // let res = response.json();
        // my change
        let res = response;

        localStorage.setItem('id', res['id']);
        localStorage.setItem('portal', res['portal']);
        localStorage.setItem('username', res['username']);
        localStorage.setItem('isSuperUser', res['isSuperUser']);
        localStorage.setItem('token', res['token']);

        let perms = JSON.stringify(res['permissions']);
        localStorage.setItem('permissions', perms);

        return res['portal'];
        // return true;
      })
      //.catch(this.handleError);
  }
}
