import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdServiceService } from 'src/app/Service/Admin/ad-service.service';
import { AdminTicket } from '../../tsFiles/adTicket';

@Component({
  selector: 'app-customer-ticket',
  templateUrl: './customer-ticket.component.html',
  styleUrls: ['./customer-ticket.component.css']
})
export class CustomerTicketComponent implements OnInit {

  constructor(private api: AdServiceService) { }

  ngOnInit(): void {
    this.getAllTickets();
  }

  getAllTickets(){
    this.api.getAllTickets().subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSource= new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }

  columns = [
    {
      columnDef: 'ticketId',
      header: 'Ticket',
      cell: (element: AdminTicket) => `${element.ticketId}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: AdminTicket) => `${element.date}`,
    },
    {
      columnDef: 'customerID',
      header: 'Customer',
      cell: (element: AdminTicket) => `${element.customer.customerID}`,
    },
    {
      columnDef: 'activityId',
      header: 'ActivityId',
      cell: (element: AdminTicket) => `${element.activity.activityId}`,
    },
    {
      columnDef: 'description',
      header: 'Activity',
      cell: (element: AdminTicket) => `${element.activity.description}`,
    },
    {
      columnDef: 'Charges',
      header: 'Price',
      cell: (element: AdminTicket) => `${element.activity.charges}`,
    },
  ];
    dataSource !: MatTableDataSource<any>;
  displayedColumns = this.columns.map(c => c.columnDef);


  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



}


