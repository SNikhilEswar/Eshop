import { LocalService } from './../local.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  shopCount:number = 0

  CartData2() {
    if(localStorage.getItem('localCart') != null) {
      var cartValue = JSON.parse(localStorage.getItem('localCart'));
      this.shopCount = cartValue.length;
      console.log(cartValue)
    }
  }


  constructor(private data:LocalService) {
    this.data.cartSubject.subscribe(res => {
      this.shopCount = res;
      console.log(res);
    })
   }

  ngOnInit(): void {
    this.CartData2();
  }

}
