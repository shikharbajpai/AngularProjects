import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './auth/account/account.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { BaseComponent } from './base/base.component'
import { CartComponent } from './components/cart/cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductPageComponent } from './components/product-page/product-page.component';


const routes: Routes = [
  // { path: '', component: AccountComponent },
  { path: 'account', component: AccountComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '', component: BaseComponent, children: [

      { path: '', component: HomePageComponent },
      { path: 'homePage', component: HomePageComponent },
      { path: 'productPage', component: ProductPageComponent },
      { path: 'productDetail', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
