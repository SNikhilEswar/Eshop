import { NgForm } from '@angular/forms';
import { Products } from './../shop/products';
import { Component, OnInit, ViewChild,} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {

  @ViewChild('myForm') myForm:NgForm;
  @ViewChild('myForm2') myForm2:NgForm;

  disabled = false

  email="Bootstrap123@examlpe.com"


  onSubmit() {
    console.log(this.myForm);
    this.router.navigate(['cart']);
    this.myForm.reset();
  }
 
  onSubmit2() {
    console.log(this.myForm2);
    this.myForm2.reset();
  }


  constructor(private items: Products, private route:  ActivatedRoute, private data:LocalService, private router: Router) { }











  //forms
  
  // userModel = new Form('', '', '', '', 97463100)





  //forms







  products = [];
  seletedItems;
  id;

  ngOnInit(): void {
    this.products = this.items.productDetailes;
   // console.log(this.products);
    // this.seletedItems = this.items.productDetailes
   // console.log(this.seletedItems);

    this.route.params.subscribe((parms:Params) => {
      this.id = parms['id'];
      this.seletedItems = this.items.productDetailes[this.id -1];
      console.log( this.id)
    })

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
        if(parseInt(id) == parseInt(this.itemCart[i].Proid)) {
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
    this.cartCount();
  }

// add to cart end


cartData:number = 0;

cartCount() {
  var cartValue = JSON.parse(localStorage.getItem('localCart'));
  this.cartData = cartValue.length;
  this.data.cartSubject.next(this.cartData)
  console.log(this.cartData);
}



// number2 buy now



itemCart2 = [];
AddtoCart2(user) {
  console.log(user)
  let cartDetail = localStorage.getItem('localCart');
  if(cartDetail == null) {
    let storeData:any = [];
    storeData.push(user);
    localStorage.setItem('localCart', JSON.stringify(storeData))
  }else {
    var id = user.pro;
    let index = -1;
    this.itemCart2 = JSON.parse(localStorage.getItem('localCart'))
    for(let i = 0; i < this.itemCart2.length; i++) {
      if(parseInt(id) == parseInt(this.itemCart2[i].Proid)) {
        this.itemCart2[i].qnt = user.qnt;
        index = i;
        break;
      }
    }
    if(index == -1) {
      this.itemCart2.push(user);
      localStorage.setItem('localCart', JSON.stringify(this.itemCart2))
    }else {
      localStorage.setItem('localCart', JSON.stringify(this.itemCart2))
    }
  }
  this.cartCount();

}

// add to cart end


cartData2:number = 0;




Inc(user) {
  if(user.qnt != 5) {
    user.qnt += 1;
    console.log(user.qnt)
  }
}

Dec(user) {
  if(user.qnt != 1) {
    user.qnt -= 1;
    console.log(user.qnt);
  }
}



toShop() {
  this.router.navigate(['shop']);
}




    







}
