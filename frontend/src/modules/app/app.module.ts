import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { FileUploadModule } from 'ng2-file-upload';
import { NgImageSliderModule } from 'ng-image-slider';
import {routes} from './app-routing.module';
// import {MatProgressBarModule} from '@angular/material/progress-bar'; 

import { 
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatProgressBarModule,
  MatDividerModule,
  MatRadioModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatBadgeModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatExpansionModule
  
} from '@angular/material';

import {
  HomeComponent,
  AboutComponent, 
  LoginComponent,
  RegisterComponent,
  ProductComponent,
  AddProductComponent,
  AddCategoryComponent,
  AddToCartComponent,
  ShippingComponent,
  PaymentComponent,
  ColorComponent,
  SnackBarComponent,
  ContactUsComponent,
  FooterComponent,
  UnStitchComponent,
  OrderListComponent,
  OrderFormComponent,
  ProductListComponent,
  ProductFormComponent
} from './components';

import {
  HomeService,
  AboutService, 
  LoginService,
  RegisterService,
  ProductService,
  AddCategoryService,
  SizeService,
  SharedDataService,
  CustomerService,
  ColorService,
  OrderService,
  AuthorizationService
} from './services';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    AddProductComponent,
    AddCategoryComponent,
    AddToCartComponent,
    ShippingComponent,
    PaymentComponent,
    ColorComponent,
    MainNavComponent,
    SnackBarComponent,
    ContactUsComponent, 
    FooterComponent,
    UnStitchComponent,
    OrderListComponent,
    OrderFormComponent,
    ProductListComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    TextMaskModule,
    FileUploadModule,
    NgImageSliderModule,
    LayoutModule,
    MatListModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatExpansionModule,
  ],

  providers: [
    HomeService, 
    AboutService,
    LoginService,
    RegisterService,
    ProductService,
    AddCategoryService,
    SizeService,
    SharedDataService,
    CustomerService,
    ColorService,
    OrderService,
    AuthorizationService
  ],
  entryComponents: [SnackBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
