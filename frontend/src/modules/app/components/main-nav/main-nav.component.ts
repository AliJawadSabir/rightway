import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SharedDataService } from '../../services';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  public innerWidth: number;
  public itemsInCart: number = 0;
  public isMobileScreen: boolean;
  public isSuperUser;
  public flexForIcons;
  public products = 0;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sharedDataService: SharedDataService
    ) {
  }

  ngOnInit(){

    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 500){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }
    this.loadCart();
    
    // In login component
    this.sharedDataService.currentSuperUser.subscribe
    (superUser => this.isSuperUser = superUser);
    // In Add To Cart Component
    this.sharedDataService.currentItemsInCart.subscribe
    (items => this.itemsInCart = items);
    this.isSuperUser = sessionStorage.getItem('value');
    // if(this.innerWidth > 850){
    //   this.flexForIcons = 12;
    // }else{
    //   this.flexForIcons = 15;
    // }
  }

  // newMessage() {
  //   this.sharedDataService.changeAmount(this.total);
  // }

  // code for checking size of screen
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 500){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }
  }

  loadCart() {
    let cart:any[] = [];
    // this.total = 0;
    // this.deliveryCharges = 0;
    let item;
    if (sessionStorage.getItem('cart') != null) {
      cart = JSON.parse(sessionStorage.getItem('cart'));
		  for (var i = 0; i < cart.length; i++) {
        item = JSON.parse(cart[i]);
        // this.items.push(this.item);
        this.products += 1 * item.quantity;
      }
      // this.taxAmount = (this.totalAmount*14)/100;
      // this.total = this.totalAmount + this.taxAmount + this.deliveryCharges;
      // this.total = Math.floor(this.total);
      // this.newMessage();
    }

  }

  logOut(){
    sessionStorage.setItem('value', 'false')
    this.isSuperUser = false;
  }
}