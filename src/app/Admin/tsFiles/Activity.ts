export class Activity{
    activityId: number;
    description:string;
    Charges : number;

    constructor(activityId: number,description: string,Charges: number){
        this.activityId=activityId;
        this.description=description;
        this.Charges=Charges;
    }
}