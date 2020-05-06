import { Injectable } from '@angular/core';
import { SizeModel } from '../models';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();
  
  private userSource = new BehaviorSubject({});
  currentUser = this.userSource.asObservable();


  /**
   * For displaying Flash message 
   * 
   */
  private flashMsgSource = new Subject<object>();
  flashMsg$ = this.flashMsgSource.asObservable();

  constructor() { }

  changeAmount(amount: number) {
    this.messageSource.next(amount)
  }

  sendUserInfo(user:{}){
    this.userSource.next(user)
  }


  /**
   * Show Flash message
   * 
   * @param fmData object
   */
  flashMsg(fmData: object) {
    this.flashMsgSource.next(fmData);
  }

  // private routeURL: String = `${environment.apiBaseUrl}size`;

  // constructor(protected http: HttpClient) {}

  // create(item: SizeModel) {
  //   console.log('in size service create '+item);
  //   return this.http.post(`${this.routeURL}/create`, item);
  // }

  // findAll() {
  //   console.log('in size service find all ');
  //   return this.http.get(`${this.routeURL}/findAll`);
  // }
}
