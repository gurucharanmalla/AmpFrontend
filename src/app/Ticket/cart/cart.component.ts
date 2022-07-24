import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from 'src/app/Service/Ticket/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public tickets : any = [];
  public grandTotal !: number;
  public quantity:number=2
  customer:number=0
 

  constructor(private cartService : CartserviceService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.customer=this.router.snapshot.params['customerId'];
    this.cartService.getProducts()
    .subscribe(res=>{
      this.tickets = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(this.grandTotal)
    })
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


}
