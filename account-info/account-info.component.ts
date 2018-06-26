import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
name="abc";
accno=12345;
balance=12000.00;
loan="NA";
loanroi="NA";
fdamount="NA";
fdm="NA";
  constructor() { }

  ngOnInit() {
  }

}
