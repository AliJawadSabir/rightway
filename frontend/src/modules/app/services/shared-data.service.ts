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

  private itemsInCart = new BehaviorSubject(0);
  currentItemsInCart = this.itemsInCart.asObservable();

  private superUser = new BehaviorSubject(false);
  currentSuperUser = this.superUser.asObservable();

  private user = new BehaviorSubject(false);
  isUser = this.user.asObservable();
  
  private userSource = new BehaviorSubject({});
  currentUser = this.userSource.asObservable();


  /**
   * For displaying Flash message 
   * 
   */
  private flashMsgSource = new Subject<object>();
  flashMsg$ = this.flashMsgSource.asObservable();

  constructor() { }

  // change total amount of order
  changeAmount(amount: number) {
    this.messageSource.next(amount)
  }

  // Change superuser to true when superuser login
  changeSuperUser(isSuperUser: boolean) {
    this.superUser.next(isSuperUser)
  }

  // Change superuser to true when superuser login
  changeUser(user: boolean) {
    this.user.next(user)
  }

  // change number of items choosen in an order
  changeItemsInCart(amount: number) {
    this.itemsInCart.next(amount)
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
