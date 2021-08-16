
import { PageNotFoundComponent } from './shoping/pages/page-not-found/page-not-found.component';
import { CheckoutComponent } from './shoping/pages/checkout/checkout.component';
import { ContactComponent } from './shoping/contact/contact.component';
import { PagesComponent } from './shoping/pages/pages.component';
import { BlogDetailComponent } from './shoping/blog-detail/blog-detail.component';
import { BlogComponent } from './shoping/blog/blog.component';
import { AboutComponent } from './shoping/about/about.component';
import { CartComponent } from './shoping/cart/cart.component';
import { ShopDetailComponent } from './shoping/shop-detail/shop-detail.component';
import { ShopComponent } from './shoping/shop/shop.component';
import { HomeComponent } from './shoping/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', pathMatch: 'full', redirectTo: 'home'},
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shop/:id', component: ShopDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'blog',  component: BlogComponent},
  {path: 'blog/:id', component: BlogDetailComponent},
  {path: 'pages', children: [
    {path: '', component: PagesComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'about', component: AboutComponent}
  ]},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
