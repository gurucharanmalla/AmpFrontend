import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdTicketsComponent } from './Admin/Pages/ad-tickets/ad-tickets.component';
import { AdminActivitiesComponent } from './Admin/Pages/admin-activities/admin-activities.component';
import { CustomerTicketComponent } from './Admin/Pages/customer-ticket/customer-ticket.component';
import { SaveAdminComponent } from './Admin/Pages/save-admin/save-admin.component';

const routes: Routes = [
  {path: 'ad_act', component: AdminActivitiesComponent},
{path: 'customerTicket',component: CustomerTicketComponent},
  {path: 'adCusAct', component: AdTicketsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
