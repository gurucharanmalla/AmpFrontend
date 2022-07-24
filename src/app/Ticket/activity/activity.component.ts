import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SaveAdminComponent } from 'src/app/Admin/Pages/save-admin/save-admin.component';
import { AdServiceService } from 'src/app/Service/Admin/ad-service.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  displayedColumns: string[] = ['activityId','description', 'charges','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: AdServiceService,private save: MatDialog) { }

  ngOnInit(): void {
    this.getAllActivities();
  }


  getAllActivities(){
    this.api.getActivities().subscribe({
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



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openDialog() {
    this.save.open(SaveAdminComponent,{
      width:'50%'
    }).afterClosed().subscribe(val=>{
    
    })
    }


    Book(){
      
    }

}
