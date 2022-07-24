import { Pipe, PipeTransform } from '@angular/core';
import { AdminTicket } from '../Admin/tsFiles/adTicket';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(AdminTickets: AdminTicket[],searchValue:number): AdminTicket[] {
    if(!AdminTickets || !searchValue){
      return AdminTickets;
    }
 return AdminTickets.filter(AdminTicket =>AdminTicket.customerID);
  }

}
