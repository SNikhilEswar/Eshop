import { Blog } from './shoping/blog/blog-in';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shoping/header/header.component';
import { HomeComponent } from './shoping/home/home.component';
import { ShopComponent } from './shoping/shop/shop.component';
import { ShopDetailComponent } from './shoping/shop-detail/shop-detail.component';
import { Products } from './shoping/shop/products';
import { CartComponent } from './shoping/cart/cart.component';
import { AboutComponent } from './shoping/about/about.component';
import { BlogComponent } from './shoping/blog/blog.component';
import { BlogDetailComponent } from './shoping/blog-detail/blog-detail.component';
import { ContactComponent } from './shoping/contact/contact.component';
import { PagesComponent } from './shoping/pages/pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './shoping/pages/checkout/checkout.component';
import { PageNotFoundComponent } from './shoping/pages/page-not-found/page-not-found.component';
import { FooterComponent } from './shoping/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    ShopDetailComponent,
    CartComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailComponent,
    ContactComponent,
    PagesComponent,
    CheckoutComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [Products, Blog],
  bootstrap: [AppComponent]
})
export class AppModule { }