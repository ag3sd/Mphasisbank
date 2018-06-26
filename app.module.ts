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

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent }, 
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
    TransactionHistoryComponent
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
