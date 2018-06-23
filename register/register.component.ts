import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:string;
  password:string;
  confmpassword:string;
  email:string;

  constructor() {
    
  }
  test(refname:object) {
    console.log(refname);
  }
  ngOnInit() {

  }
  
}


