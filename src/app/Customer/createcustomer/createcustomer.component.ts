import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  customer:Customer=new Customer();
  constructor(private customerServiceService:CustomerserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  
  saveCustomer()
  {
    this.customerServiceService.insertCustomer(this.customer).subscribe( data =>{
      console.log(data);
      this.goToCustomerList();
    },
    error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/customerlist']);
  }
  
  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
  }
}
