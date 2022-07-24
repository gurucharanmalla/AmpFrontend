import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CheckoutComponent } from './Ticket/checkout/checkout.component';
import { CartComponent } from './Ticket/cart/cart.component';
import { AdminActivitiesComponent } from './Admin/Pages/admin-activities/admin-activities.component';
import { CreatecustomerComponent } from './Customer/createcustomer/createcustomer.component';
import { CreatedetailsComponent } from './Customer/createdetails/createdetails.component';
import { UpdatecustomerComponent } from './Customer/updatecustomer/updatecustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CartComponent,
    AdminActivitiesComponent,
    CreatecustomerComponent,
    CreatedetailsComponent,
    UpdatecustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,  
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
