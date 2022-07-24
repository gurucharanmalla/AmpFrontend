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
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { AdTicketsComponent } from './Admin/Pages/ad-tickets/ad-tickets.component';
import { SaveAdminComponent } from './Admin/Pages/save-admin/save-admin.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';

import {MatSortModule} from '@angular/material/sort';
import { CustomerTicketComponent } from './Admin/Pages/customer-ticket/customer-ticket.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { ActivityComponent } from './Ticket/activity/activity.component';
import { LandingComponent } from './Home/landing/landing.component';
import { RidesComponent } from './Home/rides/rides.component';
import { LandingnavComponent } from './Home/landingnav/landingnav.component';
import { LandingfooterComponent } from './Home/landingfooter/landingfooter.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CartComponent,
    AdminActivitiesComponent,
    AdTicketsComponent,
    SaveAdminComponent,
    ActivityComponent,
    LandingComponent,
    CustomerTicketComponent,
    SearchFilterPipe,  
    RidesComponent,

    SearchFilterPipe,
    RidesComponent,
    LandingnavComponent,
    LandingfooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSortModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
