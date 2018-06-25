import { Component } from '@angular/core';
import{CustomerComponent} from './customer/customer.component';
import{AccountComponent} from './account/account.component';
import{TransactionComponent} from './transaction/transaction.component';
import{DetailsComponent} from './details/details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
