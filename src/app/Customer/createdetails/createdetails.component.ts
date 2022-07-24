import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-createdetails',
  templateUrl: './createdetails.component.html',
  styleUrls: ['./createdetails.component.css']
})
export class CreatedetailsComponent implements OnInit {

  id!:number;
  customer!:Customer;
  constructor(private route: ActivatedRoute, private customerservice: CustomerserviceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.customer=new Customer();
    this.customerservice.getCustomerById(this.id).subscribe( data => {
      this.customer = data;
    });
  }
}
