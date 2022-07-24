import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/Admin/tsFiles/Activity';
import { AdServiceService } from 'src/app/Service/Admin/ad-service.service';
import { CartserviceService } from 'src/app/Service/Ticket/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public activities:Activity[] = [];
  public tickets : any = [];
  public grandTotal:number=0 ;
  customer:number=0


  public quantityone:number=0;
  public quantitytwo:number=0;
  public quantitythree:number=0;
  public quantityfour:number=0;
  public quantityfive:number=0;


  constructor(private cartService : CartserviceService,private route:Router,private router:ActivatedRoute,private activservice : AdServiceService) { }

  ngOnInit(): void {
    this.customer=this.router.snapshot.params['customerId'];
    this.activservice.getActivities()
    .subscribe(res=>{
      this.activities = res;
    })
    this.grandTotal = this.getPrice()
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  shopNow(){

    this.customer=this.router.snapshot.params['customerId'];
    this.route.navigate(['shop',this.customer])
  }

  checkout(){

     this.route.navigate(['checkout',this.customer])
  }

  addtocart(activity:any){
      this.cartService.addtoCart(activity);
  }


  getPrice():number{
    

      this.grandTotal = this.activities[0].charges * this.quantityone+
      this.activities[1].charges * this.quantitytwo+
      this.activities[2].charges * this.quantitythree+
      this.activities[3].charges * this.quantityfour+
      this.activities[4].charges * this.quantityfive;

      console.log(this.grandTotal)
      return this.grandTotal;
}



}