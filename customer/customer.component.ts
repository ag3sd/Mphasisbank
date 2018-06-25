import { Component, OnInit } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{AccountComponent} from '../account/account.component';
import{TransactionComponent} from '../transaction/transaction.component';
import{DetailsComponent} from '../details/details.component';
  

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
