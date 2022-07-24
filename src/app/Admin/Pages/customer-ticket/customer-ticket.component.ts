import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdServiceService } from 'src/app/Service/Admin/ad-service.service';
import { AdminTicket } from '../../tsFiles/adTicket';

@Component({
  selector: 'app-customer-ticket',
  templateUrl: './customer-ticket.component.html',
  styleUrls: ['./customer-ticket.component.css']
})
export class CustomerTicketComponent implements OnInit {
 
  displayedColumns: string[] = ['ticketId','username','action'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private formBuilder : FormBuilder ,private api: AdServiceService,private router: Router) { }

  ngOnInit(): void {

   /* this.dataSource.filterPredicate = function (record,filter) {
      return record.customer.customerID == filter ;
    }*/
   
    this.getAllTickets();
   // this.getAct();
  }

  /*getAct(){
   
      this.api.getAllTickets().subscribe({
        next:(res)=>{
          console.log(res)
          alert("saving done successfully")
         
         
        },
        error:()=>{
          alert("Error")
        }
      })
    
  }*/
   
  

 getAllTickets(){
    this.api.getAllTickets().subscribe({
      next:(res)=>{
        this.dataSource= new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }

  
  viewTicket(id:number):void{

    this.router.navigate(['showTicket', id]);
 }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
 