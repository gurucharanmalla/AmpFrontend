export class Activity{
    activityId: number;
    description:string;
    charges : number;

    constructor(activityId: number,description: string,charges: number){
        this.activityId=activityId;
        this.description=description;
        this.charges=charges;
    }
}