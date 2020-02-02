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
} from './components';

const routes: Routes = [
  { path: '', redirectTo: 'addCategory', pathMatch: 'full'},
  { path: 'home',
  children:[
    {path:'', component: HomeComponent},
    { path: 'product/:id', component: ProductComponent },
  ] 
},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'addCategory', component: AddCategoryComponent },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
