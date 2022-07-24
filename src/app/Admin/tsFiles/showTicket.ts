export class showTicket{
    ticketId:number;

    customerID: number;
    activityId: number;
    description:string;
    Charges : number;


    constructor( customerID: number,ticketId:number,activityId: number,description: string,Charges: number){
        this.activityId=activityId;
        this.description=description;
        this.Charges=Charges;
        this.customerID=customerID;
    
        this.ticketId=ticketId;
    }
}