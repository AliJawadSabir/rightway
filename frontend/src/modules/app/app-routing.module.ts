import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  ContactUsComponent,
  UnStitchComponent,
  OrderListComponent,
  OrderFormComponent,
  ProductListComponent,
  ProductFormComponent,
} from './components';
import { GLOBALS } from './config';

export const routes: Routes = [
  { path: '', redirectTo: 'home/product/1', pathMatch: 'full'},
  { 
    path: 'home',
    data:{act:GLOBALS.pageActions.home},
  children:[
    {
      path:'', 
      component: HomeComponent,
      data:{act:GLOBALS.pageActions.home}
    },
    { path: 'product/:id', component: ProductComponent },
    { path: 'addToCart', 
    children:[
      {path:'', component: AddToCartComponent },
      {path:'shipping', component: ShippingComponent },
      {path:'payment', component: PaymentComponent },
    ]},
  ] 
},
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'addColor', component: ColorComponent },
  { path: 'unstitch', component: UnStitchComponent },
  {
    path: 'sale',
        // canActivate: [AuthGuardService],
    component: HomeComponent,
    data: { act: GLOBALS.pageActions.sale }
  },
  {
    path: 'newArrival',
        // canActivate: [AuthGuardService],
    component: HomeComponent,
    data: { act: GLOBALS.pageActions.newArrival }
  },
  {
    path: 'summerCollection',
        // canActivate: [AuthGuardService],
    component: HomeComponent,
    data: { act: GLOBALS.pageActions.summerCollection }
  },
  {
    path: 'orders',
    children:[
      { path: '',component: OrderListComponent },
      { 
        path: 'view/:id',
        component: OrderFormComponent,
        data: { act: GLOBALS.pageActions.view }
      },
      { 
        path: 'update/:id',
        component: OrderFormComponent,
        data: { act: GLOBALS.pageActions.update }
      },
    ]
  },
  {
    path: 'products',
    children:[
      { path: '',component: ProductListComponent },
      { 
        path: 'view/:id',
        component: ProductFormComponent,
        data: { act: GLOBALS.pageActions.view }
      },
      { 
        path: 'update/:id',
        component: ProductFormComponent,
        data: { act: GLOBALS.pageActions.update }
      },
    ]
  },
  
  // {
  //   path: 'addCategory',
  //   // data: { breadcrumb: { title: 'Academic Calendar', display: true } },
  //   children: [
  //     {
  //       path: '',
  //       // canActivate: [AuthGuardService],
  //       component: AddCategoryListComponent,
  //       // data: { breadcrumb: { title: 'Academic Calendar', display: false } }
  //     },
  //     {
  //       path: 'create',
  //       // canActivate: [AuthGuardService],
  //       component: AddCategoryFormComponent,
  //       data: {
  //         // act: GLOBALS.pageActions.create,
  //         // breadcrumb: { title: 'Create', display: true }
  //       }
  //     },
  //     {
  //       path: 'view/:id',
  //       // canActivate: [AuthGuardService],
  //       component: AddCategoryFormComponent,
  //       // data: { act: GLOBALS.pageActions.view }
  //     },
  //     {
  //       path: 'update/:id',
  //       // canActivate: [AuthGuardService],
  //       component: AddCategoryFormComponent,
  //       // data: { act: GLOBALS.pageActions.update }
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
