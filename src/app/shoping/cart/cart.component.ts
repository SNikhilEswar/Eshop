import { ActivatedRoute } from '@angular/router';
import { LocalService } from './../local.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private data: LocalService, private route:ActivatedRoute) { }

storeData:any = []
cartNum:number = 0;
  ngOnInit(): void {
    this.cartDetaile();
    this.totalPrice();
  }


  cartDetaile() {
 if(localStorage.getItem('localCart')) {
this.storeData = JSON.parse(localStorage.getItem('localCart'));  
 }
  }

inc(prodid, qnt) {
  for(let i=0; i< this.storeData.length; i++) {
    if(this.storeData[i].prodid == prodid) {
      if(qnt != 5) {
        this.storeData[i].qnt = parseInt(qnt) + 1
      }
    }
    localStorage.setItem( 'localCart',JSON.stringify(this.storeData));
    this.totalPrice();
  }
}

dec(proid, qnt) {
  for(let i=0; i < this.storeData.length; i++) {
    if(this.storeData[i].proid == proid) {
      if(qnt != 0) {
        this.storeData[i].qnt = parseInt(qnt) -1
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.storeData));
    this.totalPrice();
  }
}



total:number = 0;

totalPrice() {
  if(localStorage.getItem('localCart')) {
    this.storeData = JSON.parse(localStorage.getItem('localCart'));
    this.total = this.storeData.reduce(function(acc, val) {
      return acc + (val.price * val.qnt );
    },0)
  }
}





singleDelete(data) {
  if(localStorage.getItem('localCart')) {
    this.storeData = JSON.parse(localStorage.getItem('localCart'));
    for(let i = 0; i < this.storeData.length; i++) {
      if(this.storeData[i].prodid == data) {
        this.storeData.splice(i, 1);
        localStorage.setItem('localCart', JSON.stringify(this.storeData));
        this.totalPrice();
        this.cartFunction();
      }
    }
  }
}



onDelete() {
  localStorage.removeItem('localCart');
  this.storeData = [];
  this.total = 0;
  this.data.cartSubject.next(this.cartNum);
}





  cartFunction() {
    var cartValue = JSON.parse(localStorage.getItem('localCart'));
    this.cartNum = cartValue.length;
    this.data.cartSubject.next(this.cartNum);
   // console.log(this.cartNum);
  }

}
