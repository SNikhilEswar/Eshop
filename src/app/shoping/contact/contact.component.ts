import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
@ViewChild('myForm') myForm:NgForm;
  constructor(private router: Router) { }

  username = 'nikhil'
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.myForm);
    
  }

}

