import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdServiceService } from 'src/app/Service/Admin/ad-service.service';

@Component({
  selector: 'app-ad-tickets',
  templateUrl: './ad-tickets.component.html',
  styleUrls: ['./ad-tickets.component.css']
})
export class AdTicketsComponent implements OnInit {

  getCutomerAct!: FormGroup;

  displayedColumns: string[] = ['ticketId','activityId','description', 'charges','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private formBuilder : FormBuilder ,private api: AdServiceService) { }

  ngOnInit(): void {
    this.getCutomerAct = this.formBuilder.group({
      customerId : ['',Validators.required],
    });
    //this.getAllTickets();
  }

  getAct(){
    if(this.getCutomerAct.valid)
    {
      this.api.getCutomerActivity(this.getCutomerAct.value).subscribe({
        next:(res)=>{
          console.log(res)
          alert("saving done successfully")
         
         
        },
        error:()=>{
          alert("Error")
        }
      })
    }
  }
   
  

 /* getAllTickets(){
    this.api.getCutomerActivity(customerId).subscribe({
      next:(res)=>{
        this.dataSource= new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }*/


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
