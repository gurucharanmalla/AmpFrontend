import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private customerservice:CustomerserviceService,private router:Router) { }
  
  customers!: Customer[];
  ngOnInit(){
    this.getCustomers();
  }
  getCustomers()
  {
    this.customerservice.getCustomerList().subscribe(data => {
      this.customers = data;
    });
  }
  customerDetails(id: number){
    this.router.navigate(['customerdetails',id])
  }
  updateCustomer(customer:Customer){
    this.router.navigate(['updatecustomer', customer]);
  }
  deleteCustomer(id: number){
    this.customerservice.deleteCustomer(id).subscribe( data => {
      console.log(data);
      this.getCustomers();
    })
  }
}
