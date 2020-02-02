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

import { 
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule
  
} from '@angular/material';

import {
  HomeComponent,
  AboutComponent, 
  LoginComponent,
  RegisterComponent,
  ProductComponent,
  AddProductComponent,
  AddCategoryComponent
} from './components';

import {
  HomeService,
  AboutService, 
  LoginService,
  RegisterService,
  ProductService,
  AddProductService,
  AddCategoryService
} from './services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    AddProductComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    TextMaskModule
  ],

  providers: [
    HomeService, 
    AboutService,
    LoginService,
    RegisterService,
    ProductService,
    AddProductService,
    AddCategoryService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
