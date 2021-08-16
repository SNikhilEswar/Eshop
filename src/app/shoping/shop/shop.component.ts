import { LocalService } from './../local.service';
import { Products } from './products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productList: [];
  constructor(private items: Products, private data:LocalService) { }

  ngOnInit(): void {
    this.productList = this.items.productDetailes;
   // console.log(this.productList)
  }

  Inc(pro) {
    if(pro.qnt != 5) {
      pro.qnt += 1;
     // console.log('add' + pro.qnt)
    }
  }

  Dec(pro) {
    if(pro.qnt != 0) {
      pro.qnt -= 1;
    //console.log('minus' + pro.qnt)
    }
  }

itemCart = [];
  AddtoCart(user) {
    console.log(user)
    let cartDetail = localStorage.getItem('localCart');
    if(cartDetail == null) {
      let storeData:any = [];
      storeData.push(user);
      localStorage.setItem('localCart', JSON.stringify(storeData))
    }else {
      var id = user.pro;
      let index = -1;
      this.itemCart = JSON.parse(localStorage.getItem('localCart'))
      for(let i = 0; i < this.itemCart.length; i++) {
        if(parseInt(id) === parseInt(this.itemCart[i].Proid)) {
          this.itemCart[i].qnt = user.qnt;
          index = i;
          break;
        }
      }
      if(index == -1) {
        this.itemCart.push(user);
        localStorage.setItem('localCart', JSON.stringify(this.itemCart))
      }else {
        localStorage.setItem('localCart', JSON.stringify(this.itemCart))
      }
    }
    this.cartCount()
  }

// add to cart end


cartData:number = 0;

cartCount() {
  var cartValue = JSON.parse(localStorage.getItem('localCart'));
  this.cartData = cartValue.length;
  this.data.cartSubject.next(this.cartData)
  //console.log(this.cartData);
}

  


}
