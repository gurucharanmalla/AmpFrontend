import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerserviceService} from '../customerservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:String;
  password!:String;
  constructor(private customerservice: CustomerserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.customerservice.validateCustomer(this.username,this.password).subscribe(data =>{
      console.log(data);
      this.goToCreateCustomer();
    });
  }
  goToCreateCustomer()
  {
this.router.navigate(['/customer'])
  }
onSignUp()
{
  this.router.navigate(['/customer']);
}
}
