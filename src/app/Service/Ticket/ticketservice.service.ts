import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/Ticket/tsfiles/ticket';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketserviceService {

  private baseURL=environment.ticketUrl;

  constructor(private http:HttpClient) { }

    public getAllTickets(customerId:number):Observable<any[]>{

    return this.http.get<Ticket[]>(this.baseURL+'/tickets/'+customerId)
  }


  deleteTicket(ticketId:number):Observable<object>{

    return this.http.delete(this.baseURL+'/ticket/'+ticketId)
  }

  viewTicket(ticketId:number):Observable<Ticket>{

    return this.http.get<Ticket>(this.baseURL+'/ticket/'+ticketId)
  }

  buyTicket(ticket:any):Observable<object>{

    return this.http.post(this.baseURL+'/save',ticket);

  }
}
