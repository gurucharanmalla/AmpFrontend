import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/Admin/tsFiles/Activity';

@Injectable({
  providedIn: 'root'
})
export class AdServiceService {

  constructor(private http: HttpClient) { }

getActivities(){
  return this.http.get<Activity[]>("http://localhost:8091/appadmin/actall");
}

saveAdmin(data: any){
  return this.http.post<any>("http://localhost:8091/appadmin/saveAdmin",data)
}

getCutomerActivity(customerIdd:number){

/*  const httpparams = new HttpParams({
   fromObject:{
      customerId:customerIdd
    }
  });*/

  let params = new HttpParams().set("customerId", customerIdd);
  return this.http.get<any>("http://localhost:8091/appadmin/allcus",{params});
}

}
