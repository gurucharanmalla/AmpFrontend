export class AdminTicket{
    ticketId:number;
    date:Date;
    customerID: number;
    activityId: number;
    description:string;
    Charges : number;
  activity: any;
  customer: any;

    constructor( customerID: number, date:Date,ticketId:number,activityId: number,description: string,Charges: number){
        this.activityId=activityId;
        this.description=description;
        this.Charges=Charges;
        this.customerID=customerID;
        this.date=date;
        this.ticketId=ticketId;
    }
}