import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  id!:number;
  customer:Customer = new Customer();
  constructor(private customerservice: CustomerserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.customer=this.route.snapshot.params['customerId'];
    this.customerservice.getCustomerById(this.id).subscribe( (data: any) =>{ 
      this.customer = data;
    })
  }
  onSubmit(){
    this.customerservice.updateCustomer(this.customer).subscribe( (data: any) =>{
      this.goToGetCustomerlist();
    })
  }
  goToGetCustomerlist(){
    this.router.navigate(['/customerlist']);
  }
}
