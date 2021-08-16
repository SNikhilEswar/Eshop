import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  myReativeForms:FormGroup;

  constructor() { }


  nonamesAllowed = ['nikhil', 'xyz', '1234'];

  ngOnInit(): void {
    this.myReativeForms = new FormGroup({
      'userDetaile': new FormGroup({
        'firstName' : new FormControl(null, [Validators.required, this.noNames.bind(this)]),
        'lastName': new FormControl(null, Validators.required),
      }),
        'country' : new FormControl(null, Validators.required),
        'streetAddress': new FormControl(null,Validators.required),
        'apartment': new FormArray([
          new FormControl(null,Validators.required),
        ]),
        'state' : new FormControl(null,Validators.required),
        'postCode': new FormControl(null,Validators.required),
        'phone': new FormControl(null,[Validators.required,Validators.minLength(8)]),
        'email': new FormControl(null,[Validators.required, Validators.email], this.noEmail),
        'password': new FormControl(null, [Validators.required,Validators.minLength(8)])
      
    })
  }
  
  
  onSubmit() {
    console.log(this.myReativeForms);
   
  }


onAdd() {
  const con = new FormControl(null, Validators.required);
  (<FormArray>this.myReativeForms.get('apartment')).push(con)
}


noNames(control: FormControl) {
  if(this.nonamesAllowed.indexOf(control.value) !==-1) {
    return {'nameNotAllowed': true}
  }else {
    return null;
  }
}

noEmail(control: FormControl):Promise<any> | Observable<any> {
const myResponse = new Promise<any>((resolve, rejects) => {
  setTimeout(() => {
    if(control.value === 'nikhilkumar2224@gmail.com') {
      resolve({'emailNotValid': true})
    }else {
      resolve(null)
    }
  },2000);
})
return myResponse
}









}


