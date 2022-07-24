export class AdminProfile{
    username: string;
    password: string;
    address: string;
    mobileNumber: number;
    email: string;

    constructor(username: string,password: string,address: string,mobileNumber: number, email: string){
        this.username=username;
        this.password=password;
        this.address=address;
        this.mobileNumber=mobileNumber;
        this.email=email;
    }
}