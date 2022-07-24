export class Ticket {

     ticketId:number;
     date : Date
     activity : any
     customer : any

     constructor(
     ticketId:number,
     date : Date,
     activity : any,
     customer : any
     ){

        this.activity=activity
        this.ticketId = ticketId
        this.date = date
        this.customer = customer

     }


}
