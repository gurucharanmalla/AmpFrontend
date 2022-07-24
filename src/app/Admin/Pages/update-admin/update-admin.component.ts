import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Customer/customer';
import { AdServiceService } from 'src/app/Service/Admin/ad-service.service';
import { Admin } from '../../tsFiles/Admin';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  id!:number;
  admins:Admin = new Admin();
  constructor( private api: AdServiceService,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.admins=this.route.snapshot.params['adminId'];
    this.api.getAdminById(this.id).subscribe( (data: any) =>{ 
      this.admins = data;
    })
  }
  onSubmit(){
    this.api.updateAdmin(this.admins).subscribe( (data: any) =>{
      console.log(data);
      this.goToGetAdminlist();
    })
  }
  goToGetAdminlist(){
    this.router.navigate(['']);
  }

}
