import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthorizationService implements CanActivate {
  constructor(
    public router: Router,
    protected http: HttpClient
  ) {
    this.setHeaders();
   }

  canActivate(): boolean {

    if (!this.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
    return true;
  }

  public setHeaders() {
    // let headers = new Headers();
    // headers.append('token', sessionStorage.getItem('token'));
    // return new RequestOptions({ headers: headers })
    if (sessionStorage.getItem('token') != null){
      let options = {headers: new HttpHeaders({
        'token': sessionStorage.getItem('token')})
      }
      return options;
    }else{
      return {};
    }
  }

  /**
   * TODO:low the same function is in employee.service.ts file. Do something about it.
   */
  isAuthenticated(): boolean {
    if (sessionStorage.getItem('id') && sessionStorage.getItem('token') && sessionStorage.getItem('token') !== undefined) {
      return true;
    } else {
      return false;
    }
  }
}
