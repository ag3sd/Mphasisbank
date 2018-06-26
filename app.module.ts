import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { AtmComponent } from './atm/atm.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'atm', component: AtmComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'customer-header', component: CustomerHeaderComponent }, 
  { path: 'customer-details', component: CustomerDetailsComponent }, 
  { path: 'account-info', component: AccountInfoComponent }, 
  { path: 'transaction', component: TransactionComponent }, 
  { path: 'transaction-history', component: TransactionHistoryComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee-details', component: EmployeeDetailsComponent },
  { path: 'verify-account', component: VerifyAccountComponent },
  { path: 'delete-account', component: DeleteAccountComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CustomerHeaderComponent,
    CustomerDetailsComponent,
    AccountInfoComponent,
    TransactionComponent,
    TransactionHistoryComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    VerifyAccountComponent,
    DeleteAccountComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
