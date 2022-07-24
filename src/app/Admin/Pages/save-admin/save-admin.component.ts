import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdServiceService } from 'src/app/Service/Admin/ad-service.service';
import{ MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-save-admin',
  templateUrl: './save-admin.component.html',
  styleUrls: ['./save-admin.component.css']
})
export class SaveAdminComponent implements OnInit {


  savingAdmin !: FormGroup

  constructor(private formBuilder : FormBuilder ,private api : AdServiceService,private dialogRef : MatDialogRef<SaveAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {this.savingAdmin = this.formBuilder.group({
    username : ['',Validators.required],
    password : ['',Validators.required],
    address: ['',Validators.required],
    mobileNumber: ['',Validators.required],
    email: ['',Validators.required]
  });
}

saveAdminData(){
  if(this.savingAdmin.valid)
  {
    this.api.saveAdmin(this.savingAdmin.value).subscribe({
      next:(res)=>{
        alert("saving done successfully")
        this.savingAdmin.reset();
        this.dialogRef.close('Confirm');
      },
      error:()=>{
        alert("Error while booking - check data")
      }
    })
  }
}

}
