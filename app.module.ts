import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import{AccountComponent} from './account/account.component';
import{TransactionComponent} from './transaction/transaction.component';

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaldComponent } from './personald/personald.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  {path:'account', component: AccountComponent},
    {path: 'transaction' , component: TransactionComponent},
    {path: 'personald' , component: PersonaldComponent}
  
]
 const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    AccountComponent,
    TransactionComponent,
    PersonaldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
